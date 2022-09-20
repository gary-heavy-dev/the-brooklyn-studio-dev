import { MdFormatQuote } from 'react-icons/md'

export default {
  name: 'flexiblePullQuote',
  type: 'object',
  title: 'Pull Quote',
	icon: MdFormatQuote,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text'
    }
  ]
}