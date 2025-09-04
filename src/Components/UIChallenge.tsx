import React from "react";// imports React library - needed since we using JSX(HTML-like syntax in TS)
import "./UIChallenge.css";

// UIChallenge is a React component, hence React.Functional Component declaration
const UIChallenge: React.FC = () => {
  return (
  <>
  <main className="price-grid">
      <section className="intro">
        <h1>Join our community</h1>
        <p className="highlight">30-day, hassle-free money back guarantee</p>
        <p className="description">
          Gain acces to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>

      <section className="subscription">
        <h2>Monthly Subscription</h2>
        <p className="price">
            {/* to specialize the style for the price */}
            <span className="p1">$29</span> <span className="p2">per month</span> 
        </p>
        <p className="note">Full access for less than $1 a day</p>

        <button className="signup">Sign Up</button>
      </section>

      <section className="why-us">
        <h2>Why Us</h2>
        {/* creates a list of the benefits */}
        <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises Access to our</li>
            <li>GitHub repos Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
        </ul>
      </section>
    </main>

    <footer className="footer">
        <p>Bootcamp 2023 by <a href="https://mlab.co.za/">Codetribe</a>. Developed by <a href="https://github.com/Ashley-Blu/3.10-my-portfolio">Matsekoleng Ashley</a>.</p>
      </footer>
  </>
  );
};

// ecports the UIChallenge component so that it can be imported into App.tsx
export default UIChallenge;
