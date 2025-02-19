import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HTMLMotionProps } from 'framer-motion';

// Card Component with "as" prop to allow dynamic element type
interface CardProps extends HTMLMotionProps<'div'> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Card = ({ as: Component = 'div', className, children }: CardProps) => {
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

// BoostCard Component with Framer Motion Animation
interface BoostCardProps {
  roomNumber: number; // Dynamically passed room number
  title?: string;
  description?: string;
  buttonText?: string;
  temperature: number;
  humidity: number;
}

const BoostCard = ({
  roomNumber,
  title = "Room",
  description = "",
  buttonText = "log",
  temperature,
  humidity
}: BoostCardProps) => {
  return (
    <Card as={motion.div}
      className="bg-zinc-900 w-80 p-6 rounded-lg border ring-2 ring-zinc-600 hover:ring-4 hover:ring-zinc-400 transition-all duration-300"
      initial={{ opacity: 0, y: 10 }}  // Start with opacity 0 and slide up a bit
      animate={{ opacity: 1, y: 0 }}   // Animate to opacity 1 and normal position
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      whileHover={{ scale: 1.05 }}     // Slightly scale the card up on hover
    >
      <div className="p-0 space-y-6">
        {/* Content */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            {title} {roomNumber} {/* Display room number dynamically */}
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Temperature and Humidity */}
          <div className="flex space-x-4 text-sm text-zinc-300">
            <div>
              <strong>Temperature:</strong> {temperature}°C
            </div>
            <div>
              <strong>Humidity:</strong> {humidity}%
            </div>
          </div>
        </div>

        {/* Button */}
        <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg px-6 py-2 text-sm font-medium transition-colors">
          {buttonText}
        </Button>
      </div>
      {/* Inline style for background grid */}
      
    </Card>
  );
};

export default BoostCard;
