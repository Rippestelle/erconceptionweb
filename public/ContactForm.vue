<template>
  <form
    name="Formulaire de contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit="submitForm($event)"
  >
    <input type="hidden" name="form-name" value="Formulaire de contact" />
    <p hidden>
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <input
      type="text"
      class="right"
      required
      name="lastname"
      placeholder="Nom *"
    />

    <input type="text" class="left" name="firstname" placeholder="Prénom" />

    <input
      type="email"
      class="right"
      name="mail"
      placeholder="Email *"
      required
    />

    <input type="number" class="left" name="phone" placeholder="Téléphone" />

    <textarea
      name="message"
      class="right"
      placeholder="Message *"
      required
    ></textarea>

    <div class="checkbox-container">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" class="checkbox-label"
        >J'accepte que les données transmises via ce formulaire soient
        conservées. Aucune exploitation commerciale ne sera faite des données
        conservées. Pour en savoir plus, consultez la
        <router-link to="/politique-confidentialite"
          >politique de confidentialité</router-link
        ></label
      >
    </div>

    <button
      type="submit"
      class="nav__link button-64"
      value="Envoyer le message"
    >
      <span>Envoyer</span>
    </button>
  </form>
</template>

<script setup lang="ts">
const formData = reactive({
  name: "",
  number: "",
});
const submitForm = async (e) => {
  e.preventDefault();
  console.log("formData", formData);
  let body = new URLSearchParams(formData).toString();
  console.log("body", body);
  fetch("/ContactForm.vue", {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  })
    .then((res) => {
      console.log("form sumbitted", res);
      if (res.status === 200) {
        navigateTo("/success");
      }
    })
    .catch((error) => console.error(error));
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 840px) {
    width: 100%;
  }

  input,
  textarea {
    width: 80%;
    margin-bottom: 20px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      0.25turn,
      rgb(88, 44, 145),
      rgb(46, 128, 200) 50%,
      #22d49e
    );
    border-image-slice: 1;
    font-size: 18px;
    color: var(--text-primary-color);

    @media screen and (max-width: 840px) {
      width: 100%;
    }
  }

  ::placeholder {
    color: var(--text-primary-color);
    font-size: 18px;
    font-family: "Dosis", sans-serif;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  textarea {
    height: 250px;
  }

  button {
    width: fit-content;
    padding: 3px 3px 3px 3px;

    span {
      padding: 7px 15px;
      text-transform: uppercase;
      font-size: 14px;
      font-family: "Manrope", sans-serif;
      height: inherit;
      color: var(--text-primary-color);
    }
  }
}

#checkbox {
  width: 15px;
  margin-bottom: 0px;
}

.checkbox-label {
  font-size: 14px;
}

.checkbox-container {
  width: 75%;
  margin-bottom: 25px;
}
</style>
