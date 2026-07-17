import { useState } from "react";
import practiceMgmtImage from "@/assets/feature-practice-mgmt1.png";
import patientPortalImage from "@/assets/feature-patient-portal.png";
import revenueCycleImage from "@/assets/feature-revenue-cycle.png";
import emrImage from "@/assets/feature-emr.png";
import referralImage from "@/assets/feature-referral.png";
import hrImage from "@/assets/feature-hr.png";
import accountsPayableImage from "@/assets/feature-accounts-payable.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
const HealthcareFeatures = () => {
  const ZoomableImage = ({ src, alt, borderWidth = 1, borderColor = '#D2DEF9', imageFit = 'fill' }: { src: string; alt: string; borderWidth?: number; borderColor?: string; imageFit?: 'cover' | 'contain' | 'fill' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const imageClass = `w-full h-full ${imageFit === 'contain' ? 'object-contain' : imageFit === 'fill' ? 'object-fill' : 'object-cover'} rounded-2xl`;

    return (
      <>
        <div className="relative w-full mx-auto">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full text-left cursor-zoom-in"
            aria-label={`Open ${alt}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-[90%] h-[360px] mx-auto box-border">
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={src}
                  alt={alt}
                  className={imageClass}
                  style={{
                    borderColor,
                    borderWidth: `${borderWidth}px`,
                    borderStyle: 'solid',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
          </button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="fixed inset-0 z-50 flex items-center justify-center border-0 bg-black/80 p-2 sm:p-4 left-0 top-0 translate-x-0 translate-y-0 w-auto max-w-none">
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-red-600 p-2 text-white shadow-lg hover:bg-red-700"
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <div className="flex items-center justify-center max-h-[92vh] max-w-[95vw] overflow-hidden rounded-xl bg-white">
              <ImageWithFallback
                src={src}
                alt={alt}
                className="max-h-[92vh] max-w-[95vw] w-auto h-auto object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  const features = [{
    image: practiceMgmtImage,
    title: "Practice Management Solutions",
    description: "Comprehensive practice management software that streamlines scheduling, billing, and workflow optimization. Our integrated platform helps you manage every aspect of your healthcare practice efficiently, from appointment booking to revenue cycle management. Reduce administrative burden and focus more on patient care with our intelligent automation features."
  }, {
    image: revenueCycleImage,
    title: "Revenue Cycle Management",
    description: "Maximize your practice's financial performance with our intelligent billing and revenue cycle management solution. Automated claim submission, denial management, and real-time eligibility verification streamline your billing processes. Our analytics dashboard provides insights into financial performance, helping you identify opportunities for revenue optimization."
  }, {
    image: emrImage,
    title: "Electronic Medical Records",
    description: "Advanced EMR system designed for seamless clinical documentation and data management. Our intuitive interface reduces charting time while ensuring accurate, comprehensive patient records. Built-in clinical decision support, customizable templates, and interoperability standards help you deliver evidence-based care efficiently and effectively."
  }, {
    image: patientPortalImage,
    title: "Patient Portal & Engagement",
    description: "Empower your patients with 24/7 access to their health records and appointment scheduling. Our secure patient portal enhances communication between providers and patients, improving satisfaction and outcomes. Features include online bill pay, prescription refills, secure messaging, and telehealth integration for modern healthcare delivery."
  }, {
    image: referralImage,
    title: "Referral Portal",
    description: "Streamline patient referrals with our secure and efficient referral portal, ensuring seamless communication between providers."
  }, {
    image: accountsPayableImage,
    title: "Accounts Payable",
    description: "Scan and upload new invoices to track and manage payables.  Easily review and authorize vendor invoices for later payment by management or outside accountants.  Review paid invoice data or generate custom reports."
  }, {
    image: hrImage,
    title: "Human Resources",
    description: "Maintain individual employee profiles with hiring, payroll and benefits details.  Manage and approve your staff's time punches, time off records for payroll processing with ADP. Track PTO, vacation, sick leave, jury and travel hours.  Additionally, the system supports automated generation of weekly, overtime, pay-period, and monthly timesheets."
  }];
  const lightBgTitles = [
    "Practice Management Solutions",
    "Electronic Medical Records",
    "Human Resources",
    "Referral Portal",
    "Revenue Cycle Management",
    "Patient Portal & Engagement",
    "Accounts Payable",
  ];
  const borderTitles = [
    "Electronic Medical Records",
    "Revenue Cycle Management",
    "Human Resources",
    "Accounts Payable",
    "Practice Management Solutions",
    "Patient Portal & Engagement",
    "Referral Portal",
  ];
  const exploreRouteByTitle: Record<string, string> = {
    "Practice Management Solutions": "/practice-management",
    "Electronic Medical Records": "/services/emr",
    "Revenue Cycle Management": "/services/rcm",
    "Human Resources": "/services/hr",
    "Accounts Payable": "/services/ap",
    // Fallbacks for items without dedicated service pages yet
    "Patient Portal & Engagement": "/services/patient-portal",
    "Referral Portal": "/services/referral-portal",
  };
  return <section className="pt-4 pb-4 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4 text-center uppercase tracking-wide text-[30px] leading-tight" style={{
          color: '#2589CB'
        }}>
            <span className="block">YOUR ORAL SURGERY</span>
            <span className="block">PRACTICE MANAGEMENT SOLUTION</span>
          </h2>
            <p className="text-xl text-muted-foreground text-center">
              <span className="block">Our cloud-based technology delivers powerful solutions – providing</span>
              <span className="block">the practice management tools necessary for your success.</span>
            </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => {
            const isLightBg = lightBgTitles.includes(feature.title);
            const whiteBgTitles = ["Revenue Cycle Management", "Patient Portal & Engagement", "Accounts Payable"];
            const bgColor = whiteBgTitles.includes(feature.title) ? "#FFFFFF" : (isLightBg ? "#FAFCFD" : undefined);
            const hasBorder = borderTitles.includes(feature.title);
            const isThickBorder = ["Accounts Payable", "Practice Management Solutions", "Human Resources", "Revenue Cycle Management", "Electronic Medical Records", "Referral Portal", "Patient Portal & Engagement"].includes(feature.title);
          return <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl ${isLightBg ? 'text-black' : ''} ${hasBorder ? 'border' : ''}`}
              style={{ ...(hasBorder ? { borderColor: '#D2DEF9' } : {}), ...(bgColor ? { backgroundColor: bgColor } : {}) }}
            >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ZoomableImage
                    src={feature.image}
                    alt={feature.title}
                    borderWidth={isThickBorder ? 15 : 1}
                    borderColor={isThickBorder ? '#000' : '#D2DEF9'}
                    imageFit="fill"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className={`text-3xl font-bold mb-4 ${isLightBg ? 'text-black' : 'text-foreground'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isLightBg || feature.title === 'Referral Portal' ? 'text-black/90' : 'text-muted-foreground'}`}>
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <Link to={exploreRouteByTitle[feature.title] || "/products-services"}>
                      <Button size="lg" className="bg-[#980826] hover:bg-[#7d0620] text-white shadow-sm">
                        Explore more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HealthcareFeatures;