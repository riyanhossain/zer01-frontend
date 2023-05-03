import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import { useMutation } from "@tanstack/react-query";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendApplicationMail } from "@/lib/api/application";
import { toast } from "react-hot-toast";

Modal.setAppElement("#__next");

const customStyles = {
    content: {
        top: "20%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -20%)",
        padding: "0",
        border: "none",
        borderRadius: "0rem",
    },
};

export default function SendApplicationModal({ modalIsOpen, setIsOpen, id = "" }) {
    const [consent, setConsent] = React.useState(false);
    const [images, setImages] = React.useState([]);
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const maxNumber = 1;

    const acceptType = ["pdf", "application/pdf"];

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
        setValue("attatchment", imageList[0]);
    };

    function closeModal() {
        setIsOpen(false);
    }

    const mutation = useMutation({
        mutationFn: sendApplicationMail,
        onSuccess: (data) => {
            toast.success(data?.data?.message);
            closeModal();
            clearForm();
        },
        onError: (error) => {
            toast.error(error.message || "Something went wrong");
        },
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", data.name);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("startDate", data.startDate);
        formData.append("message", data.message);
        formData.append("token", data.token);
        data?.attatchment && formData.append("attatchment", data.attatchment.file);

        mutation.mutate(formData);
    };

    const clearForm = () => {
        setValue("id", "");
        setValue("name", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("startDate", "");
        setValue("message", "");
        setValue("token", "");
        setValue("attatchment", "");
        setConsent(false);
    };

    return (
        <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Send Application Modal">
            <GoogleReCaptcha onVerify={(token) => setValue("token", token)} />
            <section className="w-full p-5 lg:w-[808px] bg-white h-[calc(100vh-5rem)] overflow-y-scroll hideScrollBar">
                <div className="py-6 bg-primary relative px-4 flex justify-center items-center">
                    <p className="uppercase font-inter font-bold text-white ">SEND APPLICATION</p>
                    <button className="absolute right-0 text-white text-4xl font-bold p-4" onClick={closeModal}>
                        X
                    </button>
                </div>

                <form className="flex flex-col items-center border border-primary" onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-6 w-full flex justify-center border-b border-[#E8E8E8]">
                        <div action="" className="w-full lg:w-[460px] grid grid-cols-[30%_1fr] space-y-3">
                            <div className="col-span-1 flex items-center">
                                <p className="text-sm font-poppins leading-[22px] text-[#2C2E3E]">Full Name*</p>
                            </div>
                            <div className="col-span-1">
                                <input
                                    type="text"
                                    className="w-full border border-[#E3E3E3]  p-2 outline-none"
                                    placeholder="Full Name"
                                    required
                                    {...register("name", { required: true })}
                                />
                            </div>

                            <div className="col-span-1 flex items-center">
                                <p className="text-sm font-poppins leading-[22px] text-[#2C2E3E]">Phone number*</p>
                            </div>
                            <div className="col-span-1">
                                <input
                                    type="text"
                                    className="w-full border border-[#E3E3E3]  p-2 outline-none"
                                    placeholder="+92123456789"
                                    required
                                    {...register("phone", { required: true })}
                                />
                            </div>

                            <div className="col-span-1 flex items-center">
                                <p className="text-sm font-poppins leading-[22px] text-[#2C2E3E]">Email*</p>
                            </div>
                            <div className="col-span-1">
                                <input
                                    type="email"
                                    className="w-full border border-[#E3E3E3]  p-2 outline-none"
                                    placeholder="name@email.com"
                                    required
                                    {...register("email", { required: true })}
                                />
                            </div>

                            <div className="col-span-1 flex items-center">
                                <p className="text-sm font-poppins leading-[22px] text-[#2C2E3E]">Start Date*</p>
                            </div>
                            <div className="col-span-1">
                                <input
                                    type="date"
                                    className="w-full border border-[#E3E3E3]  p-2 outline-none"
                                    placeholder="Start Date"
                                    required
                                    {...register("startDate", { required: true })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="py-6 w-full px-20 space-y-3 ">
                        <p className="text-sm font-poppins leading-[22px] text-[#2C2E3E] text-center">Additional message</p>

                        <textarea
                            name=""
                            id=""
                            rows="8"
                            className="w-full border border-[#E3E3E3]  p-2 outline-none"
                            placeholder="Additional message"
                            {...register("message")}
                        ></textarea>
                    </div>

                    <ImageUploading
                        acceptType={acceptType}
                        multiple={false}
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        allowNonImageType="true"
                        dataURLKey="data_url"
                    >
                        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                            <div className="w-[90%] lg:w-[70%] flex justify-center">
                                {images && images.length > 0 ? (
                                    <div className="w-full h-20 flex items-center justify-center">
                                        {images[0].file.name}{" "}
                                        <button type="button" className="ml-2 text-primary" onClick={onImageRemoveAll}>
                                            X
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        className={`border-addgray border-dashed border-[1.5px] w-full flex flex-col justify-center items-center p-4 gap-y-3 ${
                                            isDragging ? "bg-[#F5F5F5]" : ""
                                        }`}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9.86275 2.85175C11.9866 1.02029 14.6955 0.00879434 17.5 0C23.2162 0 27.9614 4.25 28.4778 9.73038C31.8608 10.2085 34.5 13.0411 34.5 16.5176C34.5 20.3341 31.3168 23.375 27.4599 23.375H21.75C21.4682 23.375 21.198 23.2631 20.9987 23.0638C20.7994 22.8645 20.6875 22.5943 20.6875 22.3125C20.6875 22.0307 20.7994 21.7605 20.9987 21.5612C21.198 21.3619 21.4682 21.25 21.75 21.25H27.462C30.2054 21.25 32.375 19.0995 32.375 16.5176C32.375 13.9336 30.2075 11.7831 27.4599 11.7831H26.3974V10.7206C26.3995 6.00313 22.447 2.125 17.5 2.125C15.2047 2.13417 12.9883 2.96317 11.2504 4.4625C9.64175 5.848 8.80025 7.51825 8.80025 8.82938V9.78137L7.85462 9.8855C4.886 10.2106 2.625 12.648 2.625 15.5507C2.625 18.6681 5.23875 21.25 8.53463 21.25H13.25C13.5318 21.25 13.802 21.3619 14.0013 21.5612C14.2006 21.7605 14.3125 22.0307 14.3125 22.3125C14.3125 22.5943 14.2006 22.8645 14.0013 23.0638C13.802 23.2631 13.5318 23.375 13.25 23.375H8.53463C4.1295 23.375 0.5 19.9028 0.5 15.5507C0.5 11.8044 3.19025 8.70187 6.75175 7.91562C7.05562 6.08175 8.235 4.25425 9.86275 2.85175Z"
                                                fill="#A0A3BD"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M16.7481 8.81026C16.8468 8.71131 16.9641 8.63281 17.0931 8.57924C17.2222 8.52568 17.3606 8.49811 17.5004 8.49811C17.6401 8.49811 17.7785 8.52568 17.9076 8.57924C18.0367 8.63281 18.1539 8.71131 18.2526 8.81026L24.6276 15.1853C24.8271 15.3848 24.9392 15.6554 24.9392 15.9375C24.9392 16.2197 24.8271 16.4902 24.6276 16.6898C24.4281 16.8893 24.1575 17.0013 23.8754 17.0013C23.5932 17.0013 23.3226 16.8893 23.1231 16.6898L18.5629 12.1274V30.8125C18.5629 31.0943 18.4509 31.3646 18.2517 31.5638C18.0524 31.7631 17.7822 31.875 17.5004 31.875C17.2186 31.875 16.9483 31.7631 16.7491 31.5638C16.5498 31.3646 16.4379 31.0943 16.4379 30.8125V12.1274L11.8776 16.6898C11.6781 16.8893 11.4075 17.0013 11.1254 17.0013C10.8432 17.0013 10.5726 16.8893 10.3731 16.6898C10.1736 16.4902 10.0615 16.2197 10.0615 15.9375C10.0615 15.6554 10.1736 15.3848 10.3731 15.1853L16.7481 8.81026Z"
                                                fill="#A0A3BD"
                                            />
                                        </svg>

                                        <p className="text-sm font-inter text-addgray">
                                            Drop your files here, or <span className="text-primary cursor-pointer">Upload</span>
                                        </p>

                                        <p className="text-sm font-inter text-addgray">PDF, Max size: 5MB</p>
                                    </button>
                                )}
                            </div>
                        )}
                    </ImageUploading>

                    <div className="flex items-center gap-x-3 py-6">
                        <input type="checkbox" className="w-6 h-6" required onChange={() => setConsent(!consent)} />
                        <label className="text-sm font-inter text-primary uppercase font-bold">CONSENT TO PERSONAL DATA PROCESSING *</label>
                    </div>

                    <div className="flex justify-center w-[70%] pb-6">
                        <div className="grid grid-cols-[40%_1fr] h-[255px]  border border-primary w-full">
                            <div className="text-center font-poppins">
                                <p className="text-sm leading-[22px]">Consent to the processing of personal data</p>
                                <p className="text-[10px] leading-[22px] text-addgray">
                                    Please read the regulation of European Parliament and the Council of EU.
                                </p>
                            </div>

                            <div className="overflow-y-scroll bg-[#F4F4F4] p-3">
                                <p className="leading-[22px] text-[9px] font-poppins">
                                    Pursuant to Article 6 (1) (a) of Regulation of the European Parliament and of the Council (EU) 2016/679 of 27
                                    April 2016 on the protection of individuals with regard to the processing of personal data and on the free
                                    movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation, hereinafter the
                                    “GDPR”) Candidate: I, hereby grant the controller, SC 01 CODE SRL, with its registered office at: Str. Parang,
                                    NR.1, BL. A, SC. 1, ET. IX, AP. 33, CLUJ-NAPOCA, CLUJ, ROMANIA, Company ID: 47254471, registered in the ONRC CLUJ,
                                    NR. J12/7141/28.11.2022, since 28.11.2022, consent to the processing of my personal data for the purposes of
                                    including my profile in the list of professionals profiles and contacting me regarding offers to participate in a
                                    new project (including the recording of such contacts and provision of the professional profile to clients) in the
                                    extent of the sent CV and other data that I have voluntarily provided for this purpose of processing (in
                                    particular name, surname, address, date of birth, e-mail address, phone number, age, education, qualification,
                                    professional experience, position, language skills), including the photo. I acknowledge that, on the basis of this
                                    consent, the controller may provide my personal information to its clients who wish to implement a project and are
                                    looking for a specialist in the relevant area of my qualification or specialisation. I declare that I have been
                                    notified by the controller in accordance with Article 13 of the GDPR before granting my consent. This consent is
                                    granted for three years from the date of granting. I am aware that the provision of personal data for this purpose
                                    and the granting of consent to their processing is voluntary. I declare that the provided information is true and
                                    up-to-date. I acknowledge that I have the right to withdraw my consent at any time by sending an e-mail to
                                    contact@zero1code.com or by delivering a written notice to the address of the controller’s registered office. The
                                    withdrawal of the consent does not affect the legality of the processing based on the consent prior to its
                                    withdrawal. The recording of the Candidate’s processed personal data and contacting the Candidate as a specialist
                                    in a certain area, if appropriate, creates an opportunity for the Candidate to conclude a commercial-law contract
                                    with the controller, whose subject matter will be the supply of services provided by the Candidate to a third
                                    party, depending on the requirements of third parties that have expressed interest in the supply of services
                                    provided by the Candidate. Click HERE for more information about personal data processing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="bg-primary text-white font-inter text-lg font-extrabold uppercase w-full py-1.5 px-6">
                            APPLY
                        </button>
                    </div>

                    <p className="text-addgray font-inter uppercase text-xs leading-6">ALL FIELDS MARKED WITH * ARE MANDATORY</p>
                </form>
            </section>
        </Modal>
    );
}
