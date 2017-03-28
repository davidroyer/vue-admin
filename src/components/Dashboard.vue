<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <h1>Dashboard Page</h1>


      <template v-for="field in fields">
        <component :is="field.type" :field="field"></component>
      </template>

    </div>
  </div>
</template>

<script>
import TextField from './Fields/TextField.vue'
import TextareaField from './Fields/TextareaField.vue'
import CheckboxField from './Fields/CheckboxField.vue'
import SelectField from './Fields/SelectField.vue'
export default {
  components: {
    CheckboxField,
    TextField,
    TextareaField,
    SelectField
  },
  data () {
    return {
      checked: true,
      fields: [
        {
          type: 'text-field',
          label: 'Post Title',
          value: 'text 1 field'

        },
        {
          type: 'textarea-field',
          label: 'Intro Blurb',
          value: 'text 2 field'
        },
        {
          type: 'select-field',
          label: 'Post Tags',
          value: [],
          options: [
            {
              label: 'Google',
              value: 'goog'
            },
            {
              label: 'Facebook',
              value: 'fb'
            }
          ]
        },
        {
          type: 'checkbox-field',
          name: 'postStatus',
          label: 'Post Is Live',
          value: true
        }
        // {
        //   type: 'q-checkbox',
        //   label: 'Post Is Live',
        //   value: true
        // }
      ]
    }
  },
  created() {
  }
}
</script>

<style>
.field {
  margin-bottom: 1.5em;
}

#checkboxField {
    margin-top: 1em;
}
</style>
