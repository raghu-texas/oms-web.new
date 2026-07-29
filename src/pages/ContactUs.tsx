import ImageWithFallback from "@/components/ImageWithFallback";
import contactBg from "@/assets/team-collaboration.jpg";

const ContactUs = () => {
  return (
    <div>
      <main>
        {/* Banner / Title section matching About Us style */}
        <section className="pt-24 pb-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-2">
              <div className="flex justify-center">
                <div
                  className="relative inline-block"
                  style={{ width: 'min(100%, 56rem)', height: 'auto' }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden"
                    style={{
                      background: "#E8F1F9"
                    }}
                  />
                  <div className="absolute top-3 left-8 w-24 h-24 bg-[#E3EEF7] rounded-full blur-3xl opacity-70" />
                  <div className="absolute bottom-3 right-8 w-32 h-32 bg-[#E3EEF7] rounded-full blur-3xl opacity-60" />
                  <div className="relative text-center py-2 px-6 w-full">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#2589CB] rounded-full" />
                      <div className="h-1 w-1 bg-[#2589CB] rounded-full" />
                      <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#2589CB] rounded-full" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight text-[#0D47A1]">
                      Contact <span className="text-[#2589CB]">Us</span>
                    </h1>
                    <div className="flex items-center justify-center gap-4 mt-0">
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#617CB5]" />
                      <div className="h-2 w-2 border-2 border-[#2589CB] rounded-full" />
                      <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#617CB5]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact details section */}
        <section className="pt-6 pb-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/95 rounded-2xl shadow-sm border border-[#E6F0FA] p-6">
                <div className="flex flex-col items-center text-center">
                  <p className="text-lg text-muted-foreground">Reach our team</p>
                  <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                    Use the contact information below to reach our support or schedule a demo. We're available to help you implement and get the most out of OnlineMedSys.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EEF6FF] shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F4FF] text-[#1E6FB5]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E6FB5]"><path d="M4 4h16v16H4z" /><path d="M22 6L12 13 2 6" /></svg>
                    </div>
                    <div>
                      <p className="text-sm uppercase text-muted-foreground">Email Us</p>
                      <a href="mailto:support@onlinemedsys.com" className="block mt-1 text-lg font-semibold text-foreground">support@onlinemedsys.com</a>
                      <p className="text-sm text-muted-foreground mt-1">We typically reply within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EEF6FF] shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8FFF4] text-[#1EA56F]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1EA56F]"><path d="M22 16.92V19a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 5 2h2.09a2 2 0 0 1 2 1.72c.12.86.35 1.7.67 2.5a2 2 0 0 1-.45 2.11L8.91 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.32 1.64.55 2.5.67A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm uppercase text-muted-foreground">Call Us</p>
                      <a href="tel:+17138408640" className="block mt-1 text-lg font-semibold text-foreground">713-840-8640</a>
                      <p className="text-sm text-muted-foreground mt-1">Mon - Fri: 8:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#EEF6FF] shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E9FF] text-[#7C4DFF]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7C4DFF]"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <p className="text-sm uppercase text-muted-foreground">Our Address</p>
                      <div className="mt-1 text-lg font-semibold text-foreground">
                        <p>OnlineMedSys.com</p>
                        <p>5599 San Felipe, Suite 900</p>
                        <p>Houston, TX 77056</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
