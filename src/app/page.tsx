"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart, BookOpen, Calendar, Crown, FileText, HelpCircle, Mail, MessageCircle, Shield, Star, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="animatedGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/gabe944969ffa7e979b5d602d83cc197f262c5ad9d8fbb9cc64ae9d01f047883c8994866af21514e028553206fc6b349ea6009dfc4b760f61933a89aac0f81a66_1280.jpg"
          logoAlt="CourtNews Basketball"
          brandName="CourtNews"
          button={{
            text: "Subscribe",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Your Ultimate Basketball News Hub"
          description="Stay updated with the latest scores, trades, highlights, and breaking news from the basketball world. From NBA to college hoops, we cover it all."
          tag="Breaking News"
          tagIcon={Zap}
          imageSrc="https://pixabay.com/get/g4d04bc5dee5778b7ff46c71ddd45055c29b4ab15b97c019f912a8fb44f75542609b00571ab878716c722a771840b163c4c15ffb3c9cb3905f79482b1637e8907_1280.jpg"
          imageAlt="Basketball court with players in action"
          buttons={[
            {
              text: "Latest News",
              href: "blog"
            },
            {
              text: "View Events",
              href: "events"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why us"
          description="At CourtNews, we live and breathe basketball. Our dedicated team of sports journalists, former players, and analysts brings you insider coverage, expert analysis, and real-time updates from every corner of the basketball universe."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Everything Basketball"
          description="Discover comprehensive coverage of the basketball world"
          tag="Features"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Breaking News",
              description: "Get instant updates on trades, signings, injuries, and major basketball developments as they happen",
              imageSrc: "https://pixabay.com/get/g6082eaad3f33ae128601209a2057b9de94155d9a93b0356e4b27fc8a06d56a254ebf47c278d967488e439d0c5d93e4f5c0e04f78abc272161a0367de4e5d3555_1280.png",
              imageAlt: "Breaking basketball news"
            },
            {
              id: "02",
              title: "Game Analysis",
              description: "In-depth breakdowns of key games, player performances, and strategic insights from our expert analysts",
              imageSrc: "https://pixabay.com/get/g64a3cb148cec96f1df96eb83f02fc51ce10e5f19befed998c9c64be0d9d42c01672e58e764fe491d1f9e62788afcce7a86fd6e14905d69beb3bbad3d8fbc223a_1280.jpg",
              imageAlt: "Basketball game analysis"
            },
            {
              id: "03",
              title: "Event Coverage",
              description: "Complete coverage of tournaments, camps, and basketball events at all levels from youth to professional",
              imageSrc: "https://pixabay.com/get/gd6911a84fa746c3be1ff6bb033f416df8a082ae2c5e81d371e5556b6433f0faaf47dac04b8fce73058efc5eb2a305bb161de1aee780ccfdb187ac78c1a9b2259_1280.jpg",
              imageAlt: "Basketball event coverage"
            }
          ]}
          buttons={[
            {
              text: "Read More",
              href: "blog"
            }
          ]}
        />
      </div>

      <div id="events" data-section="events">
        <ProductCardOne
          title="Upcoming Events"
          description="Don't miss the biggest basketball events and tournaments"
          tag="Events"
          tagIcon={Calendar}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "event-1",
              name: "NCAA March Madness",
              price: "March 2024",
              imageSrc: "https://pixabay.com/get/g8a23753dcaae7df7975632b191d1fd7c4cc45ac82f2ee28afc5fe45769fe70427d4471da39c0983720f4f095521eff4bbfa35b96e2558357a5250ee32d7f6fa1_1280.jpg",
              imageAlt: "NCAA March Madness tournament",
              onProductClick: () => console.log('March Madness clicked')
            },
            {
              id: "event-2",
              name: "Summer Basketball Camp",
              price: "July 2024",
              imageSrc: "https://pixabay.com/get/g7855a296a8ede9c361db8a4df7a50709f0a684cbe3b7c82d4005764eaabe65b8ec1a06ffb8393eb356856ddf992fc226c76df159f0636e14c387a5da9f54ef1e_1280.jpg",
              imageAlt: "Summer basketball training camp",
              onProductClick: () => console.log('Summer Camp clicked')
            },
            {
              id: "event-3",
              name: "Youth League Championship",
              price: "August 2024",
              imageSrc: "https://pixabay.com/get/g099c96dc178abfad8ffb1ef4eee142e85645af5375fcd695e96cde3dc05a09be98d28e77a2ee01e201f03d7b0db5a31245f31a1cd008358842204ee346ce3403_1280.jpg",
              imageAlt: "Youth basketball championship",
              onProductClick: () => console.log('Youth Championship clicked')
            }
          ]}
          buttons={[
            {
              text: "View All Events",
              href: "events"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Access Level"
          description="Get the basketball coverage that fits your needs"
          tag="Subscription"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "free",
              badge: "Free Access",
              badgeIcon: Users,
              price: "Free",
              subtitle: "Perfect for casual fans",
              features: [
                "Daily news updates",
                "Basic game scores",
                "Community access",
                "Mobile app"
              ],
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            },
            {
              id: "premium",
              badge: "Premium",
              badgeIcon: Star,
              price: "$9.99/month",
              subtitle: "For serious basketball fans",
              features: [
                "Breaking news alerts",
                "Live game updates",
                "Expert analysis",
                "Ad-free experience",
                "Premium articles",
                "Video highlights"
              ],
              buttons: [
                {
                  text: "Subscribe Now",
                  href: "contact"
                },
                {
                  text: "Free Trial",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Trusted by basketball fans and professionals worldwide"
          tag="Statistics"
          tagIcon={BarChart}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "500K+",
              title: "readers",
              description: "Basketball fans trust our coverage",
              icon: Users
            },
            {
              id: "2",
              value: "10K+",
              title: "articles",
              description: "Stories published since launch",
              icon: FileText
            },
            {
              id: "3",
              value: "250+",
              title: "events",
              description: "Basketball events covered annually",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Basketball Experts"
          description="Meet the team behind your favorite basketball coverage"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Senior Writer",
              imageSrc: "https://pixabay.com/get/gf37642b90a1a0c22a3794b64c7f6ef46300fe844722ae278610be8e80072e8977d966f9dad1c461fe7f467a02eacf6121ac8a7859473f115a3685abb868f4bf4_1280.jpg",
              imageAlt: "Marcus Johnson, Senior Basketball Writer"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "NBA Analyst",
              imageSrc: "https://pixabay.com/get/g0f548f618ab4662568d95351b38564df56ea8cb5f8449a7028cbedcaeada78969f8ddd8f4205066a004522b292882609e9cde6ff9db4f93d93a3cb70bd8e0582_1280.jpg",
              imageAlt: "Sarah Chen, NBA Analyst"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Sports Photographer",
              imageSrc: "https://pixabay.com/get/gf41a1af0c318f6479d51f991e27c12de3505593a4f9f3a1ed34c3fdd3f9debf009e051f7f9effe22b5b0125510d2dad7029434c3d1a98ceab6711fc5c1c79373_1280.jpg",
              imageAlt: "David Rodriguez, Sports Photographer"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Basketball Fans Say"
          description="Hear from our readers and the basketball community"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex Thompson",
              role: "Basketball Fan",
              testimonial: "CourtNews keeps me updated with everything happening in basketball. The breaking news alerts are incredibly fast and accurate.",
              imageSrc: "https://pixabay.com/get/gb63e0cf5f4617c9d066d9f51244d3866d36fa86ba8028f53bdeb4525f31e8c7afcb7a66103ead7f46b69c50a916ea05aaf10c72d32d50fc2454195f07d3f28e9_1280.jpg",
              imageAlt: "Alex Thompson, Basketball Fan"
            },
            {
              id: "2",
              name: "Coach Williams",
              role: "High School Coach",
              testimonial: "As a coach, I rely on CourtNews for the latest strategies and game analysis. Their expert insights help me improve my team.",
              imageSrc: "https://pixabay.com/get/gc3547a73e4ba5dd0f15e02cebb9103e0235c83229d7e42aa16acbc37ca927588d165f2d6afdef234c5985ea0bff85f79c282d3557a87a42bf612ff447207d7d2_1280.jpg",
              imageAlt: "Coach Williams, High School Basketball Coach"
            },
            {
              id: "3",
              name: "Jennifer Martinez",
              role: "Sports Broadcaster",
              testimonial: "The depth of coverage and quality of writing at CourtNews is unmatched. It's my go-to source for basketball journalism.",
              imageSrc: "https://pixabay.com/get/gdc146d2506793602a1a2c9400020a260340cffe20f21f3439638bf168099506055bdf842e4eaad76f0903591aad377a7e9c314254904b52dda25b72f7977a8b3_1280.jpg",
              imageAlt: "Jennifer Martinez, Sports Broadcaster"
            },
            {
              id: "4",
              name: "Mike Davis",
              role: "Former Player",
              testimonial: "CourtNews brings authentic basketball storytelling that resonates with players and fans alike. Truly exceptional coverage.",
              imageSrc: "https://pixabay.com/get/g520d785767cce6121095ff58041cf367b05037cdba0595f60a0e79542ae63b2f8d0e3d952602514f127865676ed0709e3e8bc268ead47c5446bf7317ecda81ae_1280.jpg",
              imageAlt: "Mike Davis, Former Basketball Player"
            },
            {
              id: "5",
              name: "Lisa Chang",
              role: "Sports Analyst",
              testimonial: "The analysis and insights provided by CourtNews are top-notch. They understand the game at every level.",
              imageSrc: "https://pixabay.com/get/g51231afc07e947882a2ec8cb86af4145dd602e717223eafc2e1b736ffa6af26211ad4b198c83ee688efd4cac421406a7643afc474bd447227299cb16f49fdd86_1280.jpg",
              imageAlt: "Lisa Chang, Sports Analyst"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Basketball Organizations"
          description="Join the leagues, teams, and media outlets that trust our coverage"
          tag="Partners"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g81040beae99c77927f1e78992bfdc0b99396c37c7de340bf52e8d0a5c6d1e1d79c200c72e8ca4509f1ea00f7b0d9ac1123bd323cde65fef2f2dcebbeff6ed66b_1280.png",
            "https://pixabay.com/get/gdc073aa29753058de3f0a03385f6a8f2eb76f45f2855fdb83137d0602fbc309fbaf51b8a4fe3119688f2a2fffa06c4b1dbc1471210ccee88d5b788dd351d44b7_1280.jpg",
            "https://pixabay.com/get/gf3a72da4c1cffa801043a68a61db59e0dcf8153e8da42fcf5240f0a798f0fa0d8032a844bb9a5604a1923d078954490423dff17ce22b4100cf5f622e676d1832_1280.jpg",
            "https://pixabay.com/get/g7e8cee7d246cf423c9643cb6e10d280687354444d413261d13f8cf288dfeaf933941f37424ed486d6681c91432ecc7f9fda8781b5983884fb3846d1a2aee7322_1280.jpg",
            "https://pixabay.com/get/g01fbac46fcadb4a266c56b3fa6b07e787cc74195b318fb866ba214d11832d728dbb14c27248b8e0418e56d2a7aaeccbbb1bd5cbb79465ea669a0e9d0bcb479c6_1280.jpg",
            "https://pixabay.com/get/g61dfcc0fceb1f837a5b3c45cc6392e71c6e48422f99c966319fdff68aa0c8a87c78ab9add2b5e96d0204deb5b7c9358efc4d4d29a43d42169e5009b4215626e1_1280.jpg",
            "https://pixabay.com/get/ga6ada0ca8a0197cb9aa9185d2ceeba31078312a1b65311aa27361c0e297f36fdc31dfa74214a8f6a379057dc716aafe1456d16195396a33746a1f7f988bfadda_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about CourtNews"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What basketball leagues do you cover?",
              content: "We cover all major basketball leagues including NBA, WNBA, NCAA Division I, G-League, international leagues like EuroLeague, and youth basketball tournaments."
            },
            {
              id: "2",
              title: "How quickly do you publish breaking news?",
              content: "Our team works around the clock to bring you breaking news within minutes of it happening. Premium subscribers get push notifications for major stories."
            },
            {
              id: "3",
              title: "Can I contribute articles or tips?",
              content: "Yes! We welcome contributions from the basketball community. Contact us through our submission form if you have story ideas or want to write for us."
            },
            {
              id: "4",
              title: "Do you offer event coverage services?",
              content: "We provide comprehensive coverage for basketball events, tournaments, and camps. Contact us to discuss coverage options for your event."
            },
            {
              id: "5",
              title: "How can I stay updated with the latest news?",
              content: "Subscribe to our newsletter, follow us on social media, or download our mobile app for real-time notifications and updates."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Basketball Stories"
          description="Stay updated with our latest articles and insights"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "NBA",
              title: "Trade Deadline Analysis",
              excerpt: "Breaking down the biggest moves and their impact on playoff races",
              imageSrc: "https://pixabay.com/get/g6082eaad3f33ae128601209a2057b9de94155d9a93b0356e4b27fc8a06d56a254ebf47c278d967488e439d0c5d93e4f5c0e04f78abc272161a0367de4e5d3555_1280.png",
              imageAlt: "NBA trade deadline analysis",
              authorName: "Marcus Johnson",
              authorAvatar: "https://pixabay.com/get/gf37642b90a1a0c22a3794b64c7f6ef46300fe844722ae278610be8e80072e8977d966f9dad1c461fe7f467a02eacf6121ac8a7859473f115a3685abb868f4bf4_1280.jpg",
              date: "15 Feb 2024"
            },
            {
              id: "2",
              category: "College",
              title: "March Madness Preview",
              excerpt: "Top contenders and sleeper picks for this year's tournament",
              imageSrc: "https://pixabay.com/get/g64a3cb148cec96f1df96eb83f02fc51ce10e5f19befed998c9c64be0d9d42c01672e58e764fe491d1f9e62788afcce7a86fd6e14905d69beb3bbad3d8fbc223a_1280.jpg",
              imageAlt: "March Madness preview",
              authorName: "Sarah Chen",
              authorAvatar: "https://pixabay.com/get/g0f548f618ab4662568d95351b38564df56ea8cb5f8449a7028cbedcaeada78969f8ddd8f4205066a004522b292882609e9cde6ff9db4f93d93a3cb70bd8e0582_1280.jpg",
              date: "12 Feb 2024"
            },
            {
              id: "3",
              category: "International",
              title: "EuroLeague Standouts",
              excerpt: "Rising stars making waves in European basketball",
              imageSrc: "https://pixabay.com/get/gd6911a84fa746c3be1ff6bb033f416df8a082ae2c5e81d371e5556b6433f0faaf47dac04b8fce73058efc5eb2a305bb161de1aee780ccfdb187ac78c1a9b2259_1280.jpg",
              imageAlt: "EuroLeague basketball news",
              authorName: "David Rodriguez",
              authorAvatar: "https://pixabay.com/get/gf41a1af0c318f6479d51f991e27c12de3505593a4f9f3a1ed34c3fdd3f9debf009e051f7f9effe22b5b0125510d2dad7029434c3d1a98ceab6711fc5c1c79373_1280.jpg",
              date: "10 Feb 2024"
            },
            {
              id: "4",
              category: "Youth",
              title: "High School Phenoms",
              excerpt: "The next generation of basketball talent to watch",
              imageSrc: "https://pixabay.com/get/gc24d335aefa622fa37425e866e1ce27dcec489b65874de698abbe0586bec1dd1ed04c0432737ddbf84db6f2596388255763e6240938cdb220d2b33e6b43aca81_1280.jpg",
              imageAlt: "High school basketball prospects",
              authorName: "Marcus Johnson",
              authorAvatar: "https://pixabay.com/get/gf37642b90a1a0c22a3794b64c7f6ef46300fe844722ae278610be8e80072e8977d966f9dad1c461fe7f467a02eacf6121ac8a7859473f115a3685abb868f4bf4_1280.jpg",
              date: "8 Feb 2024"
            },
            {
              id: "5",
              category: "Training",
              title: "Summer Camp Guide",
              excerpt: "How to choose the right basketball camp for skill development",
              imageSrc: "https://pixabay.com/get/g7714afd3ecb596bf855235ed6eb74ac4f96bbac1099357f40562683167ab3edc07c5156c63aa4c94bfa7d98360aaa4a6ceaad4bf0935d173a5bfa0022b311bd3_1280.jpg",
              imageAlt: "Basketball training camps",
              authorName: "Sarah Chen",
              authorAvatar: "https://pixabay.com/get/g0f548f618ab4662568d95351b38564df56ea8cb5f8449a7028cbedcaeada78969f8ddd8f4205066a004522b292882609e9cde6ff9db4f93d93a3cb70bd8e0582_1280.jpg",
              date: "5 Feb 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay in the Game"
          description="Subscribe to our newsletter for the latest basketball news, analysis, and exclusive content delivered straight to your inbox."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive basketball updates and can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://pixabay.com/get/gabe944969ffa7e979b5d602d83cc197f262c5ad9d8fbb9cc64ae9d01f047883c8994866af21514e028553206fc6b349ea6009dfc4b760f61933a89aac0f81a66_1280.jpg"
          logoText="CourtNews"
          copyrightText="© 2024 CourtNews. All rights reserved."
          columns={[
            {
              title: "Content",
              items: [
                {
                  label: "Latest News",
                  href: "blog"
                },
                {
                  label: "Events",
                  href: "events"
                },
                {
                  label: "Analysis",
                  href: "blog"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Subscribe",
                  href: "contact"
                },
                {
                  label: "Help Center",
                  href: "faq"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}