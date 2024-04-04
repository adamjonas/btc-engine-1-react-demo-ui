import {
  FormControl,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { SortingViewProps } from "./types";
import Image from "next/image";
import SidebarSection from "../SidebarSection";
import SortIcon from "public/sort_icon.svg";

const SortingView = ({
  onChange,
  options,
  value,
  label,
  option,
}: SortingViewProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <SidebarSection className="text-custom-primary-text">
      <label className="flex gap-2 mb-4 2xl:mb-6 items-center">
        <Image
          src={SortIcon}
          alt={label}
          className="w-[20px] h-[20px] 2xl:w-[25px]"
        />
        <p className="2xl:text-lg font-bold">{label}</p>
      </label>
      <FormControl>
        <Menu
          placement="bottom"
          closeOnBlur={true}
          matchWidth={true}
          gutter={10}
        >
          <MenuButton as="button" style={{ width: "100%" }}>
            <div className="w-full flex bg-custom-background px-4 py-3 border-[1px] border-custom-stroke items-center justify-between rounded-xl">
              <p className="text-sm 2xl:text-base font-bold text-custom-primary-text ">
                {option.label}
              </p>
              <span
                data-is-open={isOpen}
                className="data-[is-open=false]:rotate-180 transition-transform"
              >
                <Image src="./up_arrow.svg" width={11} height={7} alt="arrow" />
              </span>
            </div>
          </MenuButton>
          <MenuList
            w="full"
            _focusVisible={{ boxShadow: "none", outline: "none" }}
            border="1px solid"
            borderColor="#BFBFBF"
            borderRadius="xl"
            py={3}
          >
            {options.map((item, index) => (
              <MenuItem
                key={`${item.label}_${index}`}
                onClick={() => {
                  onChange(item.value);
                }}
                data-selected={option.value === item.value}
                className="group"
                p={0}
                m={0}
              >
                <div className="w-full px-5 py-[6px] flex gap-2 font-medium text-sm 2xl:text-base group-data-[selected=false]:hover:bg-custom-hover-state">
                  <Image
                    className="group-data-[selected=false]:invisible"
                    src="./lightning_icon_filled.svg"
                    height={16}
                    width={16}
                    alt=""
                  />
                  <span className="group-data-[selected=true]:text-custom-accent group-data-[selected=true]:font-bold">
                    {item.label}
                  </span>
                </div>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </FormControl>
    </SidebarSection>
  );
};

export default SortingView;
