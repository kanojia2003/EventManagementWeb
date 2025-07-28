# Formspree Setup Instructions

## 🚨 Important: Form is Currently in Demo Mode
The contact form is currently working in demo mode (simulated submission). To receive real emails, follow the steps below:

## Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account using your business email
3. Verify your email address

## Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Name your form: "SS Benchmark Events Contact Form"
3. Add your company email: `ssbenchmarkevents@gmail.com` (or your actual email)
4. Copy the form ID (it looks like: `xpznvqko` or similar 8-character code)

## Step 3: Update the Contact Component
1. Open `src/components/sections/Contact.jsx`
2. Find this line (around line 85):
   ```javascript
   const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
   ```
3. Replace `YOUR_FORMSPREE_ID` with your actual form ID:
   ```javascript
   const FORMSPREE_ID = 'xpznvqko'; // Use your actual form ID
   ```

## Step 4: Test the Form
1. Save the file and refresh your website
2. Fill out the contact form with test data
3. Submit the form
4. Check your email inbox for the submission
5. Verify all form fields are included

## Why You're Seeing "Failed to send message"
- The form ID is still set to `YOUR_FORMSPREE_ID` placeholder
- This causes the fetch request to fail
- The error handler shows the failure message

## Current Form Behavior
- ✅ Form validation works perfectly
- ✅ Form shows success message (demo mode)
- ✅ Form resets after submission
- ❌ No actual emails sent yet (needs Formspree setup)

## Once Formspree is Set Up, You'll Get:
- Real form submissions to your email
- Professional email formatting with all customer details
- Auto-reply to customer's email
- Spam protection
- Form submission analytics

## Alternative: Quick Test with Your Email
If you want to test immediately, you can temporarily use this simple approach:

1. Replace the FORMSPREE_ID with your email:
   ```javascript
   const FORMSPREE_ID = 'your-email@gmail.com';
   ```
2. Change the fetch URL to:
   ```javascript
   const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
   ```

Note: This won't work as well as a proper Formspree form ID, but can be used for quick testing.
