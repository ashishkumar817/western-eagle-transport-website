import LegalPageShell from "@/components/LegalPageShell";

const TermsAndConditions = () => (
  <LegalPageShell
    title="Terms & Conditions"
    description="Website terms for using Western Eagle Transport LLC’s website and submitting equipment rental enquiries."
    path="/terms-and-conditions"
  >
    <p>
      These terms apply to your use of the Western Eagle Transport LLC website. By using the website, you agree to use it lawfully and in a way that does not disrupt the site or prevent others from using it.
    </p>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Website information and enquiries</h2>
      <p>
        Equipment descriptions, images, specifications, service areas, and other website information are provided for general information. Availability, specifications, delivery arrangements, and prices can change and should be confirmed with our team. Sending an enquiry does not reserve equipment or create a rental contract.
      </p>
      <p>
        Any equipment rental or service engagement is subject to a separate quotation, confirmed booking, and/or written agreement. That agreement will set out the applicable rental period, fees, payment terms, delivery, operator arrangements, insurance, equipment condition, responsibilities, and other service conditions. If those documents conflict with this website’s general information, the signed or accepted transaction documents govern that transaction.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Acceptable use</h2>
      <p>
        Do not misuse the website, attempt to gain unauthorized access, interfere with its operation, or submit information that is unlawful, misleading, or harmful. You are responsible for ensuring that the information you provide in an enquiry is accurate and that you are authorized to provide it.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Intellectual property and external links</h2>
      <p>
        Website text, branding, graphics, and other content belong to Western Eagle Transport LLC or their respective owners. You may view and use the website for personal or business enquiry purposes. Do not reproduce or commercially use website content without the relevant owner’s permission.
      </p>
      <p>
        The website may link to third-party services, including map and social platforms. We do not control those services or their content; their own terms and privacy notices apply.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Website availability and liability</h2>
      <p>
        We aim to keep the website information useful and available, but do not guarantee that the website will always be uninterrupted, error-free, or fully current. To the extent permitted by applicable law, Western Eagle Transport LLC is not responsible for losses arising solely from reliance on general website information or temporary website unavailability. Nothing in these terms excludes liability that cannot lawfully be excluded.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Changes and governing law</h2>
      <p>
        We may update these terms by publishing a revised version on this page. These website terms are governed by the applicable laws of the United Arab Emirates, without limiting any mandatory rights or protections that apply to you. The terms of a separate rental or service agreement may specify additional dispute-resolution provisions for that transaction.
      </p>
    </section>

    <section className="space-y-3">
      <h2 className="heading-tertiary text-foreground">Contact us</h2>
      <p>
        Questions about these terms? Email{" "}
        <a className="text-primary hover:underline" href="mailto:sales@westerneagletransportllc.com">sales@westerneagletransportllc.com</a>
        {" "}or call <a className="text-primary hover:underline" href="tel:+971505567467">+971 50 556 7467</a>.
      </p>
    </section>
  </LegalPageShell>
);

export default TermsAndConditions;
