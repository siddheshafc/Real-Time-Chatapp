import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChatIcon } from "@chakra-ui/icons";
import { Circle, Divider, Heading, HStack, Text, VStack} from "@chakra-ui/layout";
import { Tab, TabList } from "@chakra-ui/tabs";
import { useContext } from "react";
import AddFriendModal from "./AddFriendModal";
import { FriendContext } from "./Home";

const Sidebar = () => {
  const { friendList } = useContext(FriendContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack py="1.4rem">
        <HStack justify="space-evenly" w="100%">
          <Heading bgGradient='linear(to-t, blue.500, teal.500)' bgClip='text' fontSize='2xl' fontWeight='bold'>Add Friend</Heading>
          <Button onClick={onOpen}>
            <ChatIcon />
          </Button>
        </HStack>
        <Divider />
        <VStack as={TabList}>
          {friendList.map(friend => (
            <HStack as={Tab} key={`friend:${friend}`}>
              <Circle
                bg={
                  "" + friend.connected === "true" ? "green.500" : "red.600"
                }
                w="10px"
                h="10px"
              />
              <Text bgGradient='linear(to-t, blue.500, teal.500)' bgClip='text' fontSize='5l' fontWeight='bold'>{friend.username}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
      <AddFriendModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Sidebar;