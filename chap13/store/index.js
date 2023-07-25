/* -------------------------------------------------------------------------- */
/*                 Simple State Management with Reactivity API                */
/* -------------------------------------------------------------------------- */

// import { reactive } from 'vue'

// export const store = reactive({
//     file: null,
//     previewUrl: null,
//     isValid: false,
// })

import { ref, reactive } from "vue";

const title = ref("");
const description = ref("");
const file = ref(null);
const previewUrl = ref(null);
const isValid = ref(false);

export function useFileStore() {
  const filePickerHandler = (event) => {
    console.log(event);
  };
  const handleFileUpload = (event) => {
    console.log(event.target.files[0]);
    file.value = event.target.files[0];
  };
  return {
    title,
    description,
    file,
    previewUrl,
    isValid,
    handleFileUpload,
  };
}
