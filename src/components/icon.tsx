import React from "react";
import ArrowLeft from "../app/assets/icons/ARROW-LEFT.svg";
import ArrowRight from "../app/assets/icons/ARROW-RIGHT.svg";
import Chart from "../app/assets/icons/CHART.svg";
import Edit from "../app/assets/icons/EDIT.svg";
import Eye from "../app/assets/icons/EYE.svg";
import Help from "../app/assets/icons/HELP.svg";
import Home from "../app/assets/icons/HOME.svg";
import Money from "../app/assets/icons/MONEY.svg";
import Package from "../app/assets/icons/PACKAGE.svg";
import PieChart from "../app/assets/icons/PIE-CHART.svg";
import Plus from "../app/assets/icons/PLUS.svg";
import Settings from "../app/assets/icons/SETTINGS.svg";
import Shirt from "../app/assets/icons/SHIRT.svg";
import Trash from "../app/assets/icons/TRASH.svg";
import Truck from "../app/assets/icons/TRUCK.svg";
import { View } from "react-native";
import { colors } from "../theme/colors";

type IconProps = {
  size?: number;
  color?: string;
};

const withIcon =
  (IconComponent: React.FC<any>) =>
  ({ size = 36, color }: IconProps) =>
    (
      <View>
        <IconComponent
          width={size}
          height={size}
          {...(color ? { stroke: color } : {})}
        />
      </View>
    );

export const ArrowLeftIcon = withIcon(ArrowLeft);
export const ArrowRightIcon = withIcon(ArrowRight);
export const ChartIcon = withIcon(Chart);
export const EditIcon = withIcon(Edit);
export const EyeIcon = withIcon(Eye);
export const HelpIcon = withIcon(Help);
export const HomeIcon = withIcon(Home);
export const MoneyIcon = withIcon(Money);
export const PackageIcon = withIcon(Package);
export const PieChartIcon = withIcon(PieChart);
export const PlusIcon = withIcon(Plus);
export const SettingsIcon = withIcon(Settings);
export const ShirtIcon = withIcon(Shirt);
export const TrashIcon = withIcon(Trash);
export const TruckIcon = withIcon(Truck);