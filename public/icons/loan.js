import * as React from "react"

const LoanIcon = (props) => (
    <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.154 1.249c2.73.46 4.094.46 6.824 0 .339-.057 1.062-.057 2.168 0 .488 0 .883.262.883.584a.432.432 0 0 1-.095.264l-2.985 3.896c4.944 2.58 7.399 5.899 7.365 9.958-.015 1.92-1.2 6.85-10.8 6.85-9.599 0-10.822-4.02-10.799-6.85.033-3.985 2.481-7.297 7.343-9.935L6.094 2.094c-.218-.288-.041-.639.395-.783.122-.04.258-.062.395-.062 1.127-.065 1.883-.065 2.27 0Z"
      fill="#C8929B"
      stroke="#C8929B"
      strokeWidth={0.625}
    />
    <path
      opacity={0.4}
      d="M11.368 15.2v-1.487h-.451v-.37h.451v-.474h-.451v-.37h.451v-1.43h.602l.55 1.43h.682v-1.43h.457v1.43h.452v.37h-.452v.474h.452v.37h-.452V15.2h-.607l-.55-1.487h-.683V15.2h-.45Zm.451-1.857h.544l-.173-.474h-.382l.011.474Zm1.383 1.041h.023l-.017-.67h-.243l.237.67Zm-1.394-1.886h.243l-.243-.717h-.023l.023.717Zm1.018.845h.388l-.012-.474h-.55l.174.474ZM11.828 6.24c0-.33-.384-.6-.858-.6-.473 0-.857.27-.857.6v2.04c0 .332.384.6.857.6.474 0 .858-.268.858-.6V6.24Z"
      fill="#A90836"
    />
    <path
      opacity={0.4}
      d="M17.091 5.28H8.006c-.474 0-.858.269-.858.6 0 .332.384.6.858.6h9.085c.474 0 .857-.268.857-.6 0-.331-.383-.6-.857-.6Z"
      fill="#A90836"
    />
  </svg>
)

export default LoanIcon