import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from 'expo-router/unstable-native-tabs';
import { FontAwesome6 } from '@expo/vector-icons';

export default function() {
  return (<NativeTabs>
    <NativeTabs.Trigger name="index">
      <Label>One</Label>
      <Icon src={{
        default: <VectorIcon family={FontAwesome6} name="key" />,
        selected: <VectorIcon family={FontAwesome6} name="gear" />,
      }} />
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="two">
      <Label>Two</Label>
      <Icon src={{
        default: <VectorIcon family={FontAwesome6} name="key" />,
        selected: <VectorIcon family={FontAwesome6} name="gear" />,
      }} />
    </NativeTabs.Trigger>
  </NativeTabs>)
}
