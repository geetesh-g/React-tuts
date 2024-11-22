import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Heading,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

export const ModalExample = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen} colorScheme="red">
				Open Modal
			</Button>
			<Modal
				blockScrollOnMount={true}
				closeOnOverlayClick={true}
				isOpen={isOpen}
				onClose={onClose}
				motionPreset="slideInTop"
				scrollBehavior="inside"
			>
				<ModalOverlay>
					<ModalContent bg="primary.100">
						<ModalHeader>
							<Heading size={"md"}>Modal</Heading>
							<ModalCloseButton color={"red.600"} />
						</ModalHeader>

						<ModalBody>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
							numquam earum, dolorem facere sit praesentium at similique
							quibusdam voluptatum, illo itaque? Esse, unde ducimus
							exercitationem tenetur laborum ratione et sit perspiciatis
							deserunt, iste vitae. Dolorem saepe placeat quidem ab sint? Animi,
							fugit earum. Eum asperiores consequuntur dolorem vitae expedita
							alias eveniet error blanditiis quo quas totam quis ut ipsam,
							doloribus nulla rem. Adipisci quos ad ut at illum similique
							distinctio. Quas, ullam repellendus necessitatibus fugit
							laboriosam soluta illum totam aperiam saepe libero veritatis
							sapiente voluptatum optio, ipsa dicta at ab non odit qui enim
							voluptates. Sequi suscipit veniam, exercitationem cum, autem sunt
							recusandae ex nam tempora neque commodi debitis atque rem
							laudantium, aspernatur quo voluptatibus asperiores distinctio
							laboriosam! Architecto cupiditate ea modi amet voluptas excepturi
							temporibus inventore cum. Deserunt tempora neque, quod, officiis
							eligendi cupiditate quam in consequuntur mollitia quibusdam cumque
							eaque doloremque dignissimos voluptates temporibus illum dolorum
							vitae eos impedit dolor perspiciatis a exercitationem repudiandae
							labore? Est aliquid reprehenderit vitae atque velit suscipit nam,
							repudiandae dolorem neque voluptate nesciunt consequatur maxime
							earum porro corrupti, odit officiis, distinctio quisquam
							cupiditate eligendi. Mollitia corrupti quia officia dicta
							explicabo ipsa sunt corporis laborum amet est. Nulla natus qui,
							vero quibusdam vel rerum.
						</ModalBody>

						<ModalFooter>
							<Button onClick={onClose} colorScheme="primary">
								Close
							</Button>
						</ModalFooter>
					</ModalContent>
				</ModalOverlay>
			</Modal>
		</>
	);
};
