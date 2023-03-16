import { createClient } from "@sanity/client"

export default createClient({
  projectId: 'qnj0b9f7',
  dataset: 'production',
  apiVersion: '2023-03-08',
  useCdn: false
})