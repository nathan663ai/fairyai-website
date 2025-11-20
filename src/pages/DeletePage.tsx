import React, { useEffect } from 'react';

const DeletePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', paddingTop: '64px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Simple HTML structure for bot-friendliness */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
          Delete Your FairyAI Account
        </h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
          We're sad to see you go. Here's everything you need to know about deleting your FairyAI account.
        </p>

        {/* Subscription Warning */}
        <div style={{ backgroundColor: '#fef3c7', border: '2px solid #fbbf24', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#92400e' }}>
            ⚠️ Important: Subscription Warning
          </h2>
          <p style={{ marginBottom: '12px', color: '#78350f' }}>
            Deleting your account does NOT cancel your App Store or Google Play subscription. You must cancel your subscription separately to avoid future charges:
          </p>
          <ul style={{ marginLeft: '24px', color: '#78350f', lineHeight: '1.8' }}>
            <li><strong>iOS:</strong> Settings → [Your Name] → Subscriptions → FairyAI → Cancel Subscription</li>
            <li><strong>Android:</strong> Google Play Store → Profile Icon → Payments & subscriptions → Subscriptions → FairyAI → Cancel Subscription</li>
          </ul>
        </div>

        {/* How to Delete */}
        <div style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
            How to Delete Your Account
          </h2>
          <p style={{ marginBottom: '16px', color: '#4a4a4a' }}>
            You can delete your FairyAI account directly from the app:
          </p>
          <ol style={{ marginLeft: '24px', color: '#4a4a4a', lineHeight: '1.8' }}>
            <li>Open the FairyAI app</li>
            <li>Go to <strong>Settings</strong></li>
            <li>Select <strong>Privacy & Data</strong></li>
            <li>Tap <strong>Delete Account</strong> (shown in red)</li>
            <li>Read the warnings carefully and confirm</li>
            <li>Enter your password to verify it's you</li>
            <li>Tap the final delete confirmation</li>
          </ol>
        </div>

        {/* Can't Access App */}
        <div style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
            Can't Access the App?
          </h2>
          <p style={{ marginBottom: '16px', color: '#4a4a4a' }}>
            If you can't access the app for any reason, you can request account deletion by email:
          </p>
          <p style={{ color: '#4a4a4a' }}>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:legal@fairyai.co.uk?subject=Account%20Deletion%20Request&body=Hi%20FairyAI%20team,%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account.%0A%0AAccount%20email:%20%0A%0AThank%20you."
              style={{ color: '#0066cc', textDecoration: 'underline' }}
            >
              legal@fairyai.co.uk
            </a>
          </p>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
            Please include your account email address in your request so we can verify your identity.
          </p>
        </div>

        {/* What Gets Deleted */}
        <div style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
            What Gets Deleted
          </h2>
          <p style={{ marginBottom: '16px', color: '#4a4a4a' }}>
            When you delete your account, the following will be permanently removed after the 30-day grace period:
          </p>
          <ul style={{ marginLeft: '24px', color: '#4a4a4a', lineHeight: '1.8' }}>
            <li>All your created stories and story history</li>
            <li>Custom characters you've created (including all 6 art styles)</li>
            <li>Generated songs and narrations</li>
            <li>Account preferences and settings</li>
            <li>Subscription and purchase history</li>
            <li>Support tickets and feedback</li>
            <li>Any remaining Fairy Dust credits</li>
          </ul>
        </div>

        {/* 30-Day Grace Period */}
        <div style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
            30-Day Grace Period
          </h2>
          <p style={{ marginBottom: '16px', color: '#4a4a4a' }}>
            We understand that sometimes deletions are accidental. Here's what happens:
          </p>
          <ul style={{ marginLeft: '24px', color: '#4a4a4a', lineHeight: '1.8', marginBottom: '16px' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Immediately:</strong> Your account is deactivated and you can no longer log in
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Days 1-30:</strong> Your data is retained but inaccessible. You can email{' '}
              <a href="mailto:legal@fairyai.co.uk" style={{ color: '#0066cc', textDecoration: 'underline' }}>
                legal@fairyai.co.uk
              </a>{' '}
              to recover your account
            </li>
            <li>
              <strong>After 30 days:</strong> All your data is permanently deleted from our servers and cannot be recovered
            </li>
          </ul>
          <p style={{ color: '#666', fontSize: '14px' }}>
            <strong>Note:</strong> This grace period is for your protection and is required by data protection laws.
          </p>
        </div>

        {/* Having Issues */}
        <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
            Having Issues? Talk to Us First
          </h2>
          <p style={{ marginBottom: '16px', color: '#4a4a4a' }}>
            Before you delete your account, we'd love to help resolve any issues you're experiencing. Most problems can be fixed quickly:
          </p>
          <ul style={{ marginLeft: '24px', color: '#4a4a4a', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Not happy with story quality? We can adjust settings</li>
            <li>Concerned about billing? We can help clarify charges</li>
            <li>App not working properly? We can troubleshoot</li>
            <li>Privacy concerns? We can explain what data we collect</li>
          </ul>
          <a
            href="mailto:support@fairyai.co.uk?subject=%5BFairyAI%20Support%5D&body=Hi%20FairyAI%20team,%0A%0AI'm%20considering%20deleting%20my%20account%20because:%0A%0A%0AThanks!"
            style={{
              display: 'inline-block',
              backgroundColor: '#10b981',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Contact Support Instead
          </a>
        </div>
      </main>
    </div>
  );
};

export default DeletePage;
