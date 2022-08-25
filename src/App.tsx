import AssesibilityStatement from '../src/components/common/AssessibilityStatement/index'

function App() {
  return (
    <div>
      <AssesibilityStatement
        headline={`Accessibility Statement And Assistance`}
        paragraph={`We are committed to providing a great experience to all our customers and aim to provide a website that is accessible and usable to the widest possible audience, regardless of technology or ability. Our objective is to enable all customers visiting our Store to successfully obtain information and transact business through the Store, including customers using assistive technologies.

        We design our website to follow the WCAG versions 2.0 AA standards, and continuously improve site accessibility and usability. If you experience any difficulty using or accessing any component or page of our Store, please contact us at 1(844) 688-5885 (9am to 5pm PT) and we will make all reasonable efforts to make that page or component accessible and support you through a communication method that is accessible for you. If we are unable to resolve your issue by phone at 1(844) 688-5885, please email us at Customerservice@biossance.com so that we may assist you in gathering information and transacting business through our Store.
        
        Please also contact us at Customerservice@biossance.com if you have any feedback or suggestions as to how we could improve the accessibility of this website.`}
      />
    </div >
  );
}

export default App;
