<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>

  <!-- Required hidden input for Netlify -->
  <input type="hidden" name="form-name" value="contact" />

  <!-- Honeypot spam protection -->
  <p style="display:none;">
    <label>
      Don’t fill this out:
      <input name="bot-field" />
    </label>
  </p>

  <!-- Name -->
  <p>
    <label>
      Name *
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
    </label>
  </p>

  <!-- Email -->
  <p>
    <label>
      Email *
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
    </label>
  </p>

  <!-- Phone -->
  <p>
    <label>
      Phone (optional)
      <input
        type="tel"
        name="phone"
        placeholder="Your phone number"
      />
    </label>
  </p>

  <!-- Message -->
  <p>
    <label>
      Message *
      <textarea
        name="message"
        rows="5"
        placeholder="Your message"
        required
      ></textarea>
    </label>
  </p>

  <!-- Submit button -->
  <p>
    <button type="submit">
      Send Message
    </button>
  </p>

</form>