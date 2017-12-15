import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { brandcolor } from '../../styles/colors'

export default class PrivacyPolicy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      directToSignup: false,
    }
  }

  handleClose = () => {
    this.setState({ directToSignup: true })
  }

  render() {
    const { directToSignup } = this.state
    const actions = [
      <FlatButton label="Close" primary={true} labelStyle={{ color: brandcolor }} onClick={this.handleClose} />,
    ]

    if (directToSignup) {
      return <Redirect to="/signup" />
    } else {
      return (
        <Dialog
          title="Privacy Policy"
          actions={actions}
          modal={false}
          open={true}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <div>
            <h3>||companyname|| Privacy Policy/Your Privacy Rights</h3>

            <h1>Overview</h1>

            <p>
              Welcome to ||companyname||! The ||companyname|| website and service are provided by ||companyname||, Inc.
              (“||companyname||”, “we”, “us” or “our”). ||companyname|| knows that you care how information about you is
              used and shared, and we appreciate your trust that we will do so carefully and sensibly. This notice
              describes our Privacy Policy for the www.||companyname||.com website (the “Website”), through downloadable
              applications we make available to you (the “App”) or through the services made available by
              ||companyname|| through the Website or the App (together with the Website and the App, the “Services”).
              Capitalized terms used but not defined in this Privacy Policy shall have the meaning set forth in the
              Terms of Service. The Services provide a way for patrons of a bar, restaurant or other entertainment
              location to order and pay for drinks, food or other entertainment from an App.
            </p>

            <p>
              If you have questions or concerns regarding this Privacy Policy, you should contact our privacy group by
              sending an email to privacy@||companyname||.com.
            </p>

            <p>
              This Privacy Policy covers only information that is collected through the Services and does not cover
              websites to which we link.
            </p>

            <h1>Notice of Information We Collect And How We Use It</h1>

            <p>
              Our primary purpose in collecting Personal Information (as defined below) is to provide you with a safe,
              smooth, efficient, and customized experience. This allows us to provide services and features that most
              likely meet your needs, and to customize our service to make your experience safer and easier. We only
              collect Personal Information about you that we consider necessary for achieving this purpose. "Personal
              Information" means information that specifically identifies an individual (such as a name, address,
              telephone number, mobile number, e-mail address or a photo) or other information about that individual
              that is directly linked to Personal Information. Personal Information does not include "aggregate"
              information, which is data we collect about the use of our Website and our services. Personal Information
              does include information displayed in your public profile on our Services, if you create one.
            </p>

            <p>
              In order to use this Service, you must first complete the registration form and create a user name and
              password. During registration, you are required to give truthful contact information (such as name and
              email address) in accordance with our Terms of Service available during registration. Once you give us
              your Personal Information, you are no longer anonymous to us. We collect and store information, including
              Personal Information , that is voluntarily supplied to us by you when registering for the Website. You can
              choose not to provide us with certain information, but by doing so, you may not be able to take advantage
              of many of our features and functionality. We use Personal Information to deliver the Services to you, to
              improve our Services, including advertising, and to develop analytics and aggregated data that allows us
              and affiliates of our Website and App to improve the usability of our Website.
            </p>

            <p>
              When you activate an account, we collect information such as your name, email address, password, and
              security questions and answers. When you save a payment card in your account, we collect the type (such as
              credit or debit) and brand of card (such as MasterCard or Visa), the card issuer, and partial card account
              numbers. When a card is used, we collect the amount of the transaction, the time and date of the
              transaction, and the identity of the merchant where the card was used. Finally, we may receive information
              about the status of your card, such as if it is suspended or cancelled, from your card issuer.
            </p>

            <h2>Information We Collect About Website Visitors</h2>

            <p>
              We automatically track certain information based upon your use of the App. We use this information to do
              internal research on our users’ demographics, interests, and behavior to better understand, protect and
              serve you and our community.
            </p>

            <p>
              By using our Services, you indicate your consent for ||companyname|| and our affiliates to send cookies to
              your computer in order to uniquely identify your browser and improve the quality of our services; you may
              turn off cookies in your browser though, in doing so, some or all of our services may not work. For a
              description of how cookies work, please see the section entitled “Cookies” below.
            </p>

            <h3>Log Files</h3>

            <p>
              Like many websites and downloadable applications, we automatically gather certain information about our
              Website and App traffic and store it in log files. This information includes Internet protocol (IP)
              addresses, browser type, Internet service provider (ISP), referring/exit pages, operating system,
              date/time stamp, and clickstream data. We use this information, which does not identify individual users,
              to analyze trends, to administer the Website and the App, to track users’ movements around the Website and
              the App and to gather demographic information about our user base.
            </p>

            <p>We do not link this automatically collected data to Personal Information. </p>

            <p>
              We use a third-party tracking service that uses log files and cookies, see below, to track non- Personal
              Information about visitors to the Website and the App in the aggregate. This service captures usage and
              volume statistics to improve the performance of our Services.
            </p>

            <h3>Cookies</h3>

            <p>
              A cookie is a small text file that is stored on a user’s computer for record-keeping purposes. We use
              cookies on this Website. As noted above, we do not link the information we store in cookies to any
              Personal Information you submit while on our Website. This Privacy Policy covers the use of cookies by the
              Website only and does not cover the use of cookies by any advertisers.
            </p>

            <p>We may use both Session ID and persistent cookies.</p>

            <p>
              A session ID cookie expires when you close you browser. We use session cookies to make it easier for you
              to navigate our Website and App. We use cookies for managing your browser and mobile sessions for your
              convenience.
            </p>

            <p>
              A persistent cookie remains on your hard drive for an extended period of time. You can remove persistent
              cookies by following directions provided in your Internet browser’s “help” file. We set a persistent
              cookie to store your password, so you do not have to enter it more than once. Persistent cookies also
              enable us to track and target the interests of our users to enhance the experience on our Website and our
              App.
            </p>

            <p>
              If you reject cookies, you may still use our Website, but your ability to use some areas of our Website or
              App, such as making an order at a bar using our Services, may be limited.
            </p>

            <p>
              Some of our business affiliates (e.g., advertisers) use cookies on our Website. Additionally, we have no
              access to or control over these cookies used on third party websites or links. See “Third Party
              Advertisers”. The acceptance and storage of cookies can be managed through your browser’s security
              settings.
            </p>

            <h3>Clear Gifs (Web Beacons/Web Bugs)</h3>

            <p>
              We may and our third party advertising affiliates may employ a software technology called clear gifs, also
              referred to as web beacons or web bugs, that help manage content on the Website by tracking what content
              is effective. Clear gifs are tiny graphics with a unique identifier, similar in function to cookies, and
              are used to track the online movements of users. In contrast to cookies, which are stored on a user’s
              computer hard drive, clear gifs are embedded invisibly on Internet pages and are about the size of the
              period at the end of this sentence. We do not tie the information gathered by clear gifs to our customers’
              Personal Information.
            </p>

            <p>To learn more about our advertising company’s use of clear gifs, see “Third Party Advertisers.”</p>

            <p>
              We use clear gifs in our HTML-based emails to let us know which emails recipients have opened. This allows
              us to gauge the effectiveness of certain communications and the effectiveness of our marketing campaigns.
              If you would like to opt-out of these emails, please see “Choice and Opt-out”.
            </p>

            <p>
              We may use Embedded Scripts, which are programming code that collects information about your interactions
              with the Website, such as the links you click on. The code is temporarily downloaded onto your computer or
              other device from our server or a third party provider and is deactivated or deleted when you disconnect
              from the Website. In addition, we may use a variety of other technologies that collect similar information
              for security and fraud detection purposes.
            </p>

            <p>
              You have the option to provide demographic information (such as income level and preferred language of
              communication) to us; we encourage you to submit this information so we can provide you a more
              personalized experience on our Website or when using our App.
            </p>

            <h3>Mobile Use</h3>

            <p>
              If you visit or use our Website on a mobile device or use our App, we may collect information from your
              device, including device ID, your mobile carrier, and your physical (GPS) location. We use your location
              information to recommend venues that may be of interest in your area and to make offers to you (unless you
              opt-out of offers). We may store and use location information for security purposes (for example, for user
              verification). We may share your location information with third parties, including Google Maps, venues or
              others to enable the functionality of our App. Depending on your device, you may turn off location
              services by going to your device settings.
            </p>

            <p>
              Once you have established your account on your mobile device or computer, we collect information we
              receive from your mobile device or computer, such as your device’s type, number and the serial number of
              its chip. We also collect all payment card and transaction information, as described under “Notice of
              Information We Collect And How We Use It” above.
            </p>

            <p>
              If you use our App, we will ask you to opt-in to push notifications, so that we can more easily notify you
              when your order is ready. You can turn on push notifications at a later date using your device’s settings,
              and you may always turn them off there later if you change your mind.
            </p>

            <h2>Information We Collect To Respond To Your Choices and Requests</h2>

            <h3>Registration</h3>

            <p>
              In order to use some features of this Website or many features of our App, you must first complete the
              registration form and create a user name and password. During registration you are required to give
              truthful contact information (such as name and email address) in accordance with our &nbsp;
              <Link to="/terms-of-service">Terms of Service</Link>. We use this information to contact you about the
              services on our Website in which you have expressed interest.
            </p>

            <h3>Orders</h3>

            <p>
              If you use our Services to place an order at a venue, we request certain Personal Information from you on
              our order form. You must provide contact information (such as name, email and a photo) and financial
              information (such as a credit card number and expiration date).
            </p>

            <p>
              We use this information for billing purposes and to fill your orders. If we have trouble processing an
              order, we will use this information to contact you.
            </p>

            <p>
              We may collect information about your purchasing behavior, including without limitation your preferred
              drink and food orders.
            </p>

            <h3>Surveys, Contests or Promotions</h3>

            <p>
              We may provide you the opportunity to participate in surveys, contests or promotions on our Website or
              using our App. If you participate, we will request certain Personal Information from you. The requested
              information typically includes contact information (such as name and shipping address) and demographic
              information.
            </p>

            <p>
              We use this information to notify contest winners and award prizes, to monitor website traffic, or to
              personalize the Website or App (in the case of anonymous information collected in surveys).
            </p>

            <p>
              We may use a third party service provider to conduct these surveys, contests or promotions on our Website
              or using our App. If we use a third party to do so, a link to the third party’s privacy policy will appear
              in the window that opens for the survey, contest or promotion, and you are now subject to that third
              party’s privacy policy. If you have any questions or concerns regarding how such third parties use your
              information, please consult the applicable third party’s privacy policy. You agree that we will not be
              responsible or liable for any loss or damage incurred in connection with our affiliation with such third
              parties, their activities on our Website or using our App, and the sharing of your information with such
              third parties.
            </p>

            <p>
              If you do not see a link to a privacy policy in a survey, contest or promotion window that pops up
              automatically or opens when you click on a link, or if you fill out a survey, contest or promotion form on
              our website that appears on a main page without a separate privacy policy link, our Privacy Policy
              applies.
            </p>

            <h3>Tell-A-Friend</h3>

            <p>
              If you choose to use our referral service (if available) to tell a friend about our Services, we will ask
              you for your friend’s name and email address. We will automatically send your friend a one-time email
              inviting him or her to visit the Website or App. ||companyname|| stores this information for the sole
              purpose of sending this one-time email and tracking the success of our referral program.
            </p>

            <h2>Communication from Us or the Website</h2>

            <h3>Special Offers and Updates</h3>

            <p>
              We will send you information on discounts, special deals and promotions at local venues as part of our
              Services.
            </p>

            <p>
              Out of respect for your privacy, we present the option not to receive these types of communications.
              Please see the “Choice and Opt-out”.
            </p>

            <h3>Newsletters</h3>

            <p>
              If you wish to subscribe to our newsletter(s), we may use your name and email address to send a newsletter
              to you. Out of respect for your privacy, we provide you a way to unsubscribe. Please see the “Choice and
              Opt-out” section.
            </p>

            <h3>Service-Related Announcements</h3>

            <p>
              We will send you strictly service-related announcements on rare occasions when it is necessary to do so.
              For instance, if our service is temporarily suspended for maintenance, we might send you an email.
            </p>

            <p>
              Generally, you may not opt-out of these communications, which are not promotional in nature. If you do not
              wish to receive them, you have the option to deactivate your account.
            </p>

            <h3>Customer Service</h3>

            <p>
              Based upon the Personal Information you provide us, we will send you a welcoming email to verify your
              username and password. We will communicate with you in response to your inquiries, to provide the services
              you request, and to manage your account. We will communicate with you by email or telephone, in accordance
              with your wishes. You may contact customer service at contact@||companyname||.com.
            </p>

            <h3>Profile </h3>

            <p>
              We may store information that we collect through cookies, log files, and/or clear gifs, and/or third party
              sources to create a “profile” of your preferences. We tie your Personal Information and your purchasing
              history to information in the profile in order to connect orders with the correct user.
            </p>

            <p>We do not share your profile with other third parties. </p>

            <h3>ID and Address Verification</h3>

            <p>
              We may use third party software to verify your identity and address, in order to confirm that you are an
              authorized credit card holder on the account that you register with us to make use of our Services.
            </p>

            <h2>Conditions Under Which We Share Information</h2>

            <h3>Aggregate Information (Non-Personally Identifiable)</h3>

            <p>
              We may share aggregated demographic information about our user base with our affiliates and advertisers.
              This information does not identify individual users. We allow our advertisers and other third parties that
              purchase such information from us to analyze the demographics and purchasing history of our user base.
            </p>

            <p>We do not link aggregate user data with Personal Information. </p>

            <h3>Personal Information</h3>

            <p>Except as discussed in this Privacy Policy, we do not share Personal Information with third parties.</p>

            <h3>Agents</h3>

            <p>
              We a credit card processing company to bill you for goods and services. This company does not retain,
              share, store or use Personal Information for any other purposes. Your interaction with any third party
              payments service is subject to the terms and conditions provided by such third party.
            </p>

            <h3>Legal Disclaimer</h3>

            <p>
              We reserve the right to disclose your Personal Information as required by law and when we believe that
              disclosure is necessary to protect our rights; to comply with a judicial proceeding, court order, or legal
              process served on us or the Website; or in connection with an actual or proposed corporate transaction or
              insolvency proceeding involving all or part of the business or asset to which the information pertains.
            </p>

            <h1>Choice and Opt-out</h1>

            <p>
              We provide you the opportunity to ‘opt-out’ of having your Personal Information used for certain purposes,
              when we ask for this information. For example, if you purchase a product/service but do not wish to
              receive any additional marketing material from us, you can indicate your preference on our platform.
            </p>

            <p>
              We may also provide non-personally identified information or aggregated information that does not identify
              you, to other parties for marketing, advertising, or other uses.
            </p>

            <p>
              If you no longer wish to receive our newsletter and promotional communications, if any, you may opt-out of
              receiving them by following the instructions included in each newsletter or communication or by emailing
              us at privacy@||companyname||.com.
            </p>

            <h1>Links to Other Websites</h1>

            <p>
              The Website contains links to other websites that are not owned or controlled by ||companyname||. Please
              be aware that we are not responsible for the privacy policies of such other websites.
            </p>

            <p>
              We encourage you to be aware when you leave the Website or the App and to read the privacy policies of
              each and every website that collects Personal Information.
            </p>

            <p>This Privacy Policy applies only to information collected by our Website and our App. </p>

            <h1>Access to Personal Information</h1>

            <p>
              If your Personal Information changes, or if you no longer desire our service, you may correct, update,
              delete or deactivate it by making the change on our member information page or by emailing our Customer
              Support at privacy@||companyname||.com or by contacting us by telephone or postal mail at the contact
              information listed below.
            </p>

            <p>
              Please keep in mind that whenever you voluntarily make your Personal Information or other private
              information available for viewing by third parties online – for example on blogs, discussion forums, or
              other community posting or social networking websites – that information can be seen, collected and used
              by others besides us. We cannot be responsible for any unauthorized third-party use of such information.
            </p>

            <h1>Information Security</h1>

            <p>
              The security of your Personal Information is important to us. When you enter sensitive information (such
              as credit card number and/or social security number) on our registration or order forms, we encrypt that
              information using secure socket layer technology (SSL).
            </p>

            <p>
              We follow generally accepted industry standards to protect the Personal Information submitted to us, both
              during transmission and once we receive it. No method of transmission over the Internet, or method of
              electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable
              means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>

            <p>
              If you have any questions about security on our Services, you can email us at privacy@||companyname||.com.
            </p>

            <p>Children Under 18 and Adults Under 21</p>

            <p>
              Our Services are not directed to people under 21 years of age. If you become aware that your child has
              provided us with Personal Information without your consent, please contact us at
              privacy@||companyname||.com. We do not knowingly collect Personal Information from children under 18. If
              we become aware that a child under 18 has provided us with Personal Information, we take steps to remove
              that information and terminate the applicable account.
            </p>

            <p>Terms of Service</p>

            <p>
              Please also visit our Terms of Service section establishing the use, disclaimers, and limitations of
              liability governing the use of our Website.
            </p>

            <p>Your Consent</p>

            <p>By using our Services, you consent to the current version of our Privacy Policy.</p>

            <h1>Changes to our Privacy Policy</h1>

            <p>
              If we decide to change our Privacy Policy, we will post changes to this Privacy Policy and other places we
              deem appropriate so that you are aware of what information we collect, how we use it, and under what
              circumstances, if any, we disclose it.
            </p>

            <p>
              We reserve the right to modify this Privacy Policy at any time, and such change will apply with respect to
              information you provide or your activity on the Website after the change in policy, so please review it
              frequently. If we make changes that materially affect our uses or disclosures of Personal Information that
              we have previously collected, we will contact you here, by email, or by means of a notice on our home page
              to obtain your consent to have the changes to our Privacy Policy apply retroactively.
            </p>

            <h1>Contact Us </h1>

            <p>
              If you have any questions or suggestions regarding our Privacy Policy, please contact us at:
              privacy@||companyname||.com.
            </p>

            <p>California Residents - Your California Privacy Rights</p>

            <p>
              If you are a resident of California, you have the right to request a list of third parties to whom we have
              disclosed your Personal Information for their direct marketing purposes during the preceding year,
              pursuant to California Civil Code Section 1798.83. To make such a request, please send an email to
              privacy@||companyname||.com or write to us at 599 SW 2nd Avenue, Fort Lauderdale, FL 33301.
            </p>

            <br />
          </div>
        </Dialog>
      )
    }
  }
}
