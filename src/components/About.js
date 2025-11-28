export default function About(props) {
  const myStyle = {
    color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : props.mode === 'dark' ? 'grey' : props.mode === 'red' ? '#bc5454ff' : props.mode === 'green' ? '#4bb543ff' : '#3b5998ff',
  }

  return(
    <div style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <p>Welcome to <strong>TextUtils</strong>, your all-in-one toolkit for smarter, faster, and cleaner text processing. We designed this application to simplify the everyday tasks writers, students, developers, and content creators face—whether you’re polishing a paragraph, transforming text formats, or generating clean, consistent content.</p>
        <h3>Our Mission</h3>
        <p>To make text manipulation effortless. We believe that powerful digital tools shouldn’t be complicated—so we built a lightweight, intuitive interface that helps you get work done with just a few clicks.</p>
        <h3>What We Offer</h3>
        <p>TextUtils brings together a wide range of text utilities in one place, including:
          <ul>
            <li><strong>Case Conversion:</strong> Instantly switch between uppercase, lowercase, and camel case formats.</li>
            <li><strong>Whitespace Management:</strong> Remove extra spaces to ensure your text is clean and well-formatted.</li>
            <li><strong>Clipboard Integration:</strong> Copy your processed text directly to your clipboard for easy pasting.</li>
            <li><strong>Real-time Analysis:</strong> Get instant feedback on word and character counts as you type.</li>
          </ul>
          Whether you're fine-tuning a blog post, preparing data, or debugging text, we’ve got you covered.
        </p>
        <h3>Why We Built It</h3>
        <p>As writers and developers ourselves, we often found it frustrating to hop between multiple websites and apps just to complete simple text tasks. So we created a single, unified platform that is:
          <ul>
              <li><strong>Fast: </strong>Runs instantly in your browser</li>
              <li><strong>Secure: </strong>Your text never leaves your device</li>
              <li><strong>Free: </strong>Because essential tools should be accessible</li>
              <li><strong>User-Friendly:</strong>No clutter, no distractions</li>
          </ul>
        </p>
        <h3>Our Vision</h3>
        <p>To become the most reliable and user-centered text processing toolbox on the web—continuously expanding our capabilities while staying simple and easy to use.</p>
        <h3>Thank You for Using TextUtils</h3>
        <p>Your feedback inspires us to keep improving. If you have suggestions, feature requests, or just want to say hello, feel free to reach out anytime.</p>
      </div>
    </div>
  );
}