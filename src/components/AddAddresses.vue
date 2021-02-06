<template>
  <div :style="{paddingLeft: 'auto', paddingRight:'auto'}">
    <FormulateForm v-model="formValues" type="group">
      <fieldset>
        <legend :style="{ color: 'white', marginBottom: '10px' }">Adresse anlegen</legend>
        <FormulateInput
          type="text"
          name="street"
          placeholder="Musterstraße 1A"
          label="Straße und Hausnummer:"
          validation="required"
          :validation-messages="{required:'Pflichtfeld'}"
        />
        <br />
        <FormulateInput
          type="text"
          name="zipCode"
          placeholder="Postleitzahl"
          label="Postleitzahl:"
          validation="required"
          :validation-messages="{required:'Pflichtfeld'}"
        />
        <br />
        <FormulateInput
          type="text"
          name="city"
          placeholder="Ort"
          label="Ort:"
          validation="required"
          :validation-messages="{required:'Pflichtfeld'}"
        />
        <br />
        <FormulateInput
          v-if="!formValues.street || !formValues.city || !formValues.zipCode"
          type="submit"
          label="Erstellen"
          @click="createAddress()"
          disabled
        />
        <FormulateInput v-else type="submit" label="Erstellen" @click="createAddress()" />
      </fieldset>
    </FormulateForm>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import VueFormulate from "@braid/vue-formulate";

export default Vue.extend({
  name: "AddAddresses",
  data: function () {
    return { formValues: {} };
  },
  methods: {
    createAddress: function () {
      axios
        .post("/api/address", {
          zipCode: this.formValues.zipCode,
          city: this.formValues.city,
          street: this.formValues.street,
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Adresse wurde erfolgreich angelegt");
            console.log(res);
          } else {
            alert(
              "Bei der Bearbeitung der Anfrage ist ein Fehler aufgetreten. Statuscode " +
                res.status +
                ": " +
                res.statusText
            );
            console.log(res);
          }
        });
    },
  },
});
Vue.use(VueFormulate);
</script>

<style lang="scss" scoped>
.formulate-input {
  font-size: 1.5rem;
  color: white;
}
fieldset {
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  margin-bottom: 2em;
  border-radius: 0.25em;
  border: 1px solid white;
}
.formulate-form {
  max-width: max-content;
  margin: 0 auto;
  padding: 1em;
  border-radius: 0.5em;
}
</style>