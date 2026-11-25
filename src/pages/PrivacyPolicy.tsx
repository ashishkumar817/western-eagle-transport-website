import LegalPageShell from "@/components/LegalPageShell";

const PrivacyPolicy = () => (
  <LegalPageShell
    title="Privacy Policy"
    description="Read how Western Eagle Transport LLC handles information submitted through its website and contact channels."
    path="/privacy-policy"
  >
    <p>
      Western Eagle Transport LLC ("Western Eagle," "we," "us," or "our") respects your privacy. This policy explains what information may be collected when you use this website, why we use it, and how to contact us about it.
    </p>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Information you provide</h2>
      <p>
        If you submit the enquiry form, we receive the name, email address, phone number, equipment interest, and message you enter. We use these details to respond to your enquiry, discuss equipment or services, and prepare a quotation when requested. You may also choose to contact us by phone, email, WhatsApp, or a social platform; information you share through those services is also handled by their respective providers.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Service providers and third-party content</h2>
      <p>
        The enquiry form sends its information to Formspree so it can be delivered to us. The website also embeds a Google Map on contact pages. These providers may process technical information, such as device or connection data, under their own terms and privacy notices. Links to social networks and other external websites are operated by those providers, not by us.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Cookies and browser storage</h2>
      <p>
        The site stores your display-theme preference in your browser. The site code also includes a preference cookie for a sidebar interface; it is used only to remember interface state if that interface is active. We do not currently add analytics or advertising trackers in the site code. The embedded Google Map may use its own cookies or similar technologies when it loads.
      </p>
      <p>
        You can manage or delete browser storage through your browser settings. Blocking storage may affect saved display preferences. For information about data collected by Google Maps or Formspree, please consult their current privacy notices.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Sharing, storage, and retention</h2>
      <p>
        We use enquiry information to handle your request and communicate with you. It may be processed by the service providers needed to operate the form, website, and embedded map. We retain enquiry details for as long as needed to respond, manage a business relationship, and meet applicable record-keeping obligations. The providers’ own retention practices are governed by their terms.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Your requests and contact</h2>
      <p>
        You may contact us to ask about, correct, or request deletion of personal information you have sent us, subject to applicable legal and business record requirements. Contact us at{" "}
        <a className="text-primary hover:underline" href="mailto:sales@westerneagletransportllc.com">sales@westerneagletransportllc.com</a>
        {" "}or call <a className="text-primary hover:underline" href="tel:+971505567467">+971 50 556 7467</a>.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Updates to this policy</h2>
      <p>
        We may update this policy when our website or practices change. The latest version will be posted on this page with its updated date.
      </p>
    </section>
  </LegalPageShell>
);

export default PrivacyPolicy;
