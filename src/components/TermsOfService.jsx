import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function TermsOfService() {
  return (
    <div className="product legalPage">
      <Helmet>
        <title>Terms of Service | NE Structures</title>
        <meta
          name="description"
          content="Terms of Service governing your use of the NE Structures website, including acceptable use, intellectual property, and disclaimers."
        />
      </Helmet>
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>LEGAL</sub>
          <div className="heading">
            <h1>Terms of Service</h1>
            <sub>
              The terms that govern your use of the NE Structures website.
            </sub>
          </div>
        </div>
      </div>
      <div className="legalContent">
        <div className="legalContentInner">
          <p className="lastUpdated">Last updated: November 2026</p>

          <section>
            <h2>1. Acceptance of These Terms</h2>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of{" "}
              <a href="https://www.nestructures.in/">www.nestructures.in</a>{" "}
              (the “Website”), operated by NE Structures. By accessing or using
              the Website, you agree to be bound by these Terms. If you do not
              agree with any part of these Terms, please do not use the Website.
            </p>
          </section>

          <section>
            <h2>2. About the Website</h2>
            <p>
              The Website presents information about NE Structures, a
              manufacturer of pre-engineered steel buildings, high-rise steel
              structures, roofing sheets, and CZ purlins, and a provider of
              structural engineering and BIM services, located at Survey No. 14,
              Arabhikothanur, Vokkaleri Taluk, NH 75, Kolar 563133, Karnataka,
              India. It is provided for general information about our products,
              services, projects, and facilities.
            </p>
          </section>

          <section>
            <h2>3. Use of the Website</h2>
            <p>
              You agree to use the Website only for lawful purposes and that you
              will not:
            </p>
            <ul>
              <li>
                Use it in any way that violates any applicable law or regulation
              </li>
              <li>
                Attempt to gain unauthorized access to the Website, its servers,
                or any connected systems or networks
              </li>
              <li>
                Interfere with or disrupt the proper functioning of the Website,
                including introducing malicious code
              </li>
              <li>
                Misrepresent your identity or affiliation with NE Structures
              </li>
              <li>
                Scrape, harvest, or collect content or personal information from
                the Website by automated means without our prior written consent
              </li>
            </ul>
            <p>
              We may suspend or restrict access to the Website for anyone who
              violates these Terms.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              The Website and its content — including text, images, logos,
              graphics, project photographs, product descriptions, and design —
              are owned by or licensed to NE Structures and are protected by
              copyright and other intellectual property laws. You may view and
              print content from the Website for your own personal,
              non-commercial use. You may not reproduce, distribute, create
              derivative works from, or otherwise use Website content for
              commercial purposes without our prior written permission.
            </p>
          </section>

          <section>
            <h2>5. Product and Service Information</h2>
            <p>
              Information on the Website is provided for general information
              purposes. Product specifications, dimensions, capacities, images,
              and project details are indicative and subject to change without
              notice. Nothing on the Website constitutes a binding offer,
              quotation, warranty, or contract. Any quotation, supply, or
              project engagement is governed solely by the written agreement
              between you and NE Structures.
            </p>
          </section>

          <section>
            <h2>6. Enquiries and Communications</h2>
            <p>
              Submitting an enquiry through the{" "}
              <Link to="/contact">contact form</Link> or contacting us by email
              or phone does not create any contractual or professional
              relationship. We may, but are not obligated to, respond to
              enquiries.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Links</h2>
            <p>
              The Website may contain links to third-party websites or services,
              such as social media profiles and map services. We do not control
              and are not responsible for the content, privacy practices, or
              availability of any third-party websites. Your use of third-party
              websites is at your own risk and governed by their own terms.
            </p>
          </section>

          <section>
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The Website is provided on an “as is” and “as available” basis. To
              the fullest extent permitted by law, NE Structures disclaims all
              warranties, express or implied, including implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the Website will be
              uninterrupted, error-free, secure, or free of viruses or other
              harmful components, or that it will be accurate or complete.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, NE Structures
              and its directors, employees, and agents shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits, data, or goodwill, arising out of
              or related to your access to or use of (or inability to use) the
              Website. Nothing in these Terms limits any liability that cannot
              be limited under applicable law.
            </p>
          </section>

          <section>
            <h2>10. Privacy</h2>
            <p>
              Your use of the Website is also governed by our{" "}
              <Link to="/PrivacyPolicy">Privacy Policy</Link>, which explains
              how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any dispute arising
              out of or relating to these Terms or the Website shall be subject
              to the exclusive jurisdiction of the courts in Karnataka, India.
            </p>
          </section>

          <section>
            <h2>12. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. The “Last updated”
              date at the top of this page indicates when they were most
              recently revised. Your continued use of the Website after any
              changes means you accept the revised Terms.
            </p>
          </section>

          <section>
            <h2>13. Contact Us</h2>
            <p>If you have questions about these Terms, reach out to us:</p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:info@nestructures.co">info@nestructures.co</a>
              </li>
              <li>Phone: +91 97417 06627 (Mon–Fri, 9 AM – 6 PM)</li>
              <li>
                Address: Survey No. 14, Arabhikothanur, Vokkaleri Taluk, NH 75,
                Kolar 563133, Karnataka, India
              </li>
              <li>
                Or use our <Link to="/contact">contact form</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
