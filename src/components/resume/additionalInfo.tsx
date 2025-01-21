import { motion } from "framer-motion"

interface AdditionalInfoProps {
  content: string
}

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 p-4 bg-gray-100 rounded-md"
    >
      <p className="text-gray-700">{content}</p>
    </motion.div>
  )
}
