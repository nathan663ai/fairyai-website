import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const APP_STORE_URL = 'https://apps.apple.com/app/fairyai/id6504419314';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.rebelai.fairyaiapp';
const API_BASE_URL = 'https://api.fairyai.co.uk';

type Platform = 'ios' | 'android' | 'desktop';

function detectPlatform(): Platform {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }

  if (/android/.test(userAgent)) {
    return 'android';
  }

  return 'desktop';
}

function getOSVersion(): string | undefined {
  const userAgent = navigator.userAgent;

  // iOS version
  const iosMatch = userAgent.match(/OS (\d+[._]\d+)/);
  if (iosMatch) {
    return iosMatch[1].replace('_', '.');
  }

  // Android version
  const androidMatch = userAgent.match(/Android (\d+\.?\d*)/);
  if (androidMatch) {
    return androidMatch[1];
  }

  return undefined;
}

async function logReferralClick(
  referralCode: string,
  platform: Platform,
  userAgent: string
): Promise<void> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    await fetch(`${API_BASE_URL}/referrals/log-click`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        referral_code: referralCode,
        user_agent: userAgent,
        device_info: {
          platform,
          os_version: getOSVersion(),
        },
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
  } catch {
    // Fire and forget - don't block redirect on API failure
  }
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch {
      return false;
    }
  }
}

const InvitePage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [platform, setPlatform] = useState<Platform>('desktop');
  const [showFallback, setShowFallback] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  useEffect(() => {
    if (!code) return;

    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);

    // Handle the full flow: log click, then redirect
    const handleFlow = async () => {
      // First, log the click and wait for it to complete (or timeout)
      await logReferralClick(code, detectedPlatform, navigator.userAgent);

      // Then redirect based on platform
      if (detectedPlatform === 'ios') {
        // Copy referral code to clipboard for iOS
        const copied = await copyToClipboard(code);
        setCopiedToClipboard(copied);

        // Small delay to ensure clipboard operation completes
        setTimeout(() => {
          window.location.href = APP_STORE_URL;
        }, 100);
      } else if (detectedPlatform === 'android') {
        // Redirect to Play Store with referrer parameter
        const encodedReferrer = encodeURIComponent(`ref=${code}`);
        window.location.href = `${PLAY_STORE_URL}&referrer=${encodedReferrer}`;
      }
      // Desktop users stay on the page
    };

    handleFlow();

    // Show fallback links after 3 seconds if redirect doesn't work
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, [code]);

  const handleManualRedirect = async (targetPlatform: 'ios' | 'android') => {
    if (!code) return;

    if (targetPlatform === 'ios') {
      await copyToClipboard(code);
      setCopiedToClipboard(true);
      window.location.href = APP_STORE_URL;
    } else {
      const encodedReferrer = encodeURIComponent(`ref=${code}`);
      window.location.href = `${PLAY_STORE_URL}&referrer=${encodedReferrer}`;
    }
  };

  // QR code URL - links back to this page so users can scan on their phone
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    `https://fairyai.co.uk/invite/${code}`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue-50 via-white to-fairy-purple-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/images/FairyAi_Logo.png"
            alt="FairyAI"
            className="h-20 mx-auto"
          />
        </div>

        {/* Mobile: Redirecting state */}
        {(platform === 'ios' || platform === 'android') && (
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              {/* Spinner */}
              <svg
                className="animate-spin h-6 w-6 text-soft-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <h1 className="text-2xl font-display font-bold text-slate-800">
                Taking you to download FairyAI...
              </h1>
            </div>

            {platform === 'ios' && copiedToClipboard && (
              <p className="text-soft-green-600 font-medium">
                ✓ Referral code copied to clipboard
              </p>
            )}

            {/* Fallback link */}
            {showFallback && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-slate-600 mb-4">
                  Redirect not working? Tap the button below:
                </p>
                <button
                  onClick={() => handleManualRedirect(platform as 'ios' | 'android')}
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  {platform === 'ios' ? (
                    <>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      Download on the App Store
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Get it on Google Play
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Desktop: Show both store links */}
        {platform === 'desktop' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-slate-800 mb-3">
                Download FairyAI
              </h1>
              <p className="text-lg text-slate-600">
                Create magical bedtime stories for your children
              </p>
            </div>

            {/* Referral code display */}
            {code && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
                <p className="text-sm text-slate-500 mb-2">Your friend's referral code:</p>
                <p className="text-2xl font-mono font-bold text-soft-blue-600">{code}</p>
                <p className="text-sm text-slate-500 mt-2">
                  Enter this code in the app after downloading
                </p>
              </div>
            )}

            {/* QR Code */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
              <p className="text-sm text-slate-500 mb-4">Scan with your phone to download:</p>
              <img
                src={qrCodeUrl}
                alt="QR Code to download FairyAI"
                className="mx-auto w-48 h-48"
              />
            </div>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => handleManualRedirect('ios')}
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all hover:scale-105 min-w-[180px]"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px]">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </button>

              <button
                onClick={() => handleManualRedirect('android')}
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all hover:scale-105 min-w-[180px]"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px]">GET IT ON</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitePage;
