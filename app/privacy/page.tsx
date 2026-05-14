import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground">Last updated: May 2025</p>

            <h2 className="text-xl font-bold text-foreground mt-8">Who We Are</h2>
            <p>
              KV Adventure Club is a free monthly snail-mail activity subscription for kids and teens 
              in the Kennebecasis Valley, New Brunswick. This service is operated in partnership with 
              a local community sponsor.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">What We Collect</h2>
            <p>When you sign up, we collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your child&apos;s first name (to address the mail)</li>
              <li>Your mailing address (to deliver the kit)</li>
              <li>Your child&apos;s age range (to customize content)</li>
              <li>Interest preferences (to personalize the kit)</li>
              <li>Any additional comments you choose to provide</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">How We Use It</h2>
            <p>
              Your information is used solely to prepare and mail monthly adventure kits to your child. 
              We do not sell, share, or use this data for marketing, advertising, or any purpose other 
              than delivering the KV Adventure Club experience.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Who Has Access</h2>
            <p>
              Your data is accessible only to the KV Adventure Club organizers responsible for 
              assembling and mailing kits. Form submissions are processed through Web3Forms and 
              delivered to a private email inbox.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Data Storage</h2>
            <p>
              We do not maintain a database of personal information. Submissions are received via 
              email and retained only as long as needed to fulfill kit deliveries. We periodically 
              delete old submission records.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Parental Consent</h2>
            <p>
              By submitting the signup form, you confirm that you are the parent or legal guardian 
              of the child being registered and that you consent to the collection and use of the 
              information described above for the purpose of delivering adventure kits.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Your Rights</h2>
            <p>You can at any time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request to see what information we have about your child</li>
              <li>Ask us to correct any information</li>
              <li>Ask us to delete all your information and cancel future mailings</li>
            </ul>
            <p>
              To make any of these requests, email us at{' '}
              <a href="mailto:hello@kvadventureclub.ca" className="text-primary hover:underline">
                hello@kvadventureclub.ca
              </a>.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Changes to This Policy</h2>
            <p>
              If we make changes to this policy, we will update this page. For a free community 
              project like this, we aim to keep things simple and transparent.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Contact</h2>
            <p>
              Questions or concerns? Reach us at{' '}
              <a href="mailto:hello@kvadventureclub.ca" className="text-primary hover:underline">
                hello@kvadventureclub.ca
              </a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
