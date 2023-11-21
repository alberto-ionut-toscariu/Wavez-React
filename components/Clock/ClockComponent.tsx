import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";

const ClockComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format the time as needed, for example, HH:mm:ss
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View>
      <Text
        className={styles.textStyle}>{formattedTime}</Text>
    </View>
  );
};

export default ClockComponent;