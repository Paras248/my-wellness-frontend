import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from "@chakra-ui/react";
import LoaderAnimation from "../../../public/loader-animation.json";

import Lottie from "lottie-react";

const LoaderModal = () => {
    return (
        <Modal isOpen={true} isCentered={true}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className=' p-[9rem] flex flex-col justify-center items-center'>
                        <Lottie animationData={LoaderAnimation} loop={true} className='w-[10rem]' />
                        <p className='grey text-[1.1rem]'>Please wait...</p>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default LoaderModal;
