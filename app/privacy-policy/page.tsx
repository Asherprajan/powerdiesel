import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, FileText, Mail, Phone } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#003b6f] text-white py-16 px-4 md:px-6">
          <div className="container mx-auto relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-200 mb-6">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
            <Image 
              src="/placeholder.svg?height=400&width=400" 
              alt="Privacy Policy Background"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center border-t-4 border-t-[#00b2f3]">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#00b2f3] text-white rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    We implement industry-standard security measures to protect your personal information.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-t-4 border-t-[#00b2f3]">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#00b2f3] text-white rounded-full flex items-center justify-center">
                      <Eye className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    We are transparent about how we collect, use, and share your information.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-t-4 border-t-[#00b2f3]">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#00b2f3] text-white rounded-full flex items-center justify-center">
                      <Lock className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">Your Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    You have control over your personal data and can request access, correction, or deletion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-slate max-w-none">
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f] flex items-center">
                    <FileText className="h-6 w-6 mr-2" />
                    1. Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Power Diesel Engines and Equipment Trading (PDEE) ("we," "our," or "us") is committed to protecting 
                    your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you visit our website, use our services, or interact with us.
                  </p>
                  <p>
                    By using our website or services, you consent to the data practices described in this Privacy Policy. 
                    If you do not agree with the terms of this Privacy Policy, please do not use our website or services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">2. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold text-[#003b6f] mb-3">Personal Information</h3>
                  <p>We may collect the following types of personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                    <li><strong>Business Information:</strong> Company name, job title, industry, business address</li>
                    <li><strong>Account Information:</strong> Username, password, account preferences</li>
                    <li><strong>Communication Records:</strong> Correspondence, inquiries, support requests</li>
                    <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely)</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-[#003b6f] mb-3 mt-6">Automatically Collected Information</h3>
                  <p>When you visit our website, we may automatically collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent on site, click patterns, referral sources</li>
                    <li><strong>Cookies and Tracking:</strong> Information stored in cookies and similar technologies</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">3. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We use the collected information for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our products and services</li>
                    <li><strong>Customer Support:</strong> To respond to inquiries, provide technical support, and resolve issues</li>
                    <li><strong>Communication:</strong> To send important updates, newsletters, and promotional materials (with consent)</li>
                    <li><strong>Business Operations:</strong> To process orders, manage accounts, and conduct business transactions</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations</li>
                    <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
                    <li><strong>Analytics:</strong> To analyze website usage, improve user experience, and optimize our services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">4. Information Sharing and Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations (under strict confidentiality agreements)</li>
                    <li><strong>Business Partners:</strong> With authorized distributors and partners for legitimate business purposes</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
                    <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">5. Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We implement appropriate technical and organizational security measures to protect your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols</li>
                    <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                    <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                    <li><strong>Staff Training:</strong> Regular privacy and security training for all employees</li>
                    <li><strong>Incident Response:</strong> Comprehensive incident response procedures</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">6. Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information we hold</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests or for marketing purposes</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">7. Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We use cookies and similar tracking technologies to enhance your experience on our website:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> Necessary for website functionality and security</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure their effectiveness</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="mt-4">
                    You can control cookie settings through your browser preferences. However, disabling certain cookies 
                    may affect the functionality of our website.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">8. Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                    in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                    Factors that determine retention periods include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The nature of the information and the purpose for which it was collected</li>
                    <li>Legal and regulatory requirements</li>
                    <li>Business needs and operational requirements</li>
                    <li>Your consent and preferences</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">9. International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. 
                    We ensure that such transfers comply with applicable data protection laws and implement appropriate 
                    safeguards, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Standard contractual clauses approved by relevant authorities</li>
                    <li>Adequacy decisions by competent data protection authorities</li>
                    <li>Certification schemes and codes of conduct</li>
                    <li>Other legally recognized transfer mechanisms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">10. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our services are not directed to children under the age of 16. We do not knowingly collect 
                    personal information from children under 16. If we become aware that we have collected personal 
                    information from a child under 16, we will take steps to delete such information promptly.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f]">11. Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Posting the updated Privacy Policy on our website</li>
                    <li>Sending an email notification to registered users</li>
                    <li>Displaying a prominent notice on our website</li>
                  </ul>
                  <p className="mt-4">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we 
                    protect your information.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#003b6f] flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    12. Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-[#00b2f3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p>privacy@pdee.net</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-[#00b2f3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Phone:</p>
                        <p>+971508492690</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-[#00b2f3] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Address:</p>
                        <p>
                          Power Diesel Engines and Equipment Trading<br />
                          Power Diesel Building, Industrial Area 2<br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6">
                    We will respond to your inquiry within 30 days of receipt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

