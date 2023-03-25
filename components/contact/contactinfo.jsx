import React from "react";
import ImageUploading from "react-images-uploading";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { sendContactMail } from "@/lib/api/contact";
import { toast } from "react-hot-toast";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contactinfo() {
    const [token, setToken] = React.useState();

    const [images, setImages] = React.useState([]);
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const maxNumber = 1;

    const acceptType = ["jpg", "png", "jpeg", "gif"];

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
        setValue("attatchment", imageList[0]);
    };

    const mutation = useMutation({
        mutationFn: sendContactMail,
        onSuccess: (data) => {
            toast.success(data?.data?.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("message", data.message);
        data.attatchment && formData.append("attatchment", data.attatchment?.file);
        mutation.mutate({
            data: formData,
            token,
        });
        clearForm();
    };

    const clearForm = () => {
        setValue("name", "");
        setValue("email", "");
        setValue("phone", "");
        setValue("message", "");
        setValue("attatchment", "");
        setImages([]);
    };

    return (
        <section className="container mx-auto px-4 lg:px-8 xl:px-20 py-6 lg:py-20 ">
            <GoogleReCaptcha onVerify={(token) => setToken(token)} />
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-y-5">
                <div className=" space-y-6 lg:space-y-12 py-6 lg:pl-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-x-3">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31 25.495C31 26.035 30.8798 26.59 30.6244 27.13C30.3691 27.67 30.0386 28.18 29.6029 28.66C28.8668 29.47 28.0556 30.055 27.1392 30.43C26.2379 30.805 25.2614 31 24.2098 31C22.6775 31 21.0401 30.64 19.3125 29.905C17.5849 29.17 15.8573 28.18 14.1447 26.935C12.4171 25.675 10.7797 24.28 9.21733 22.735C7.67001 21.175 6.27291 19.54 5.02604 17.83C3.79419 16.12 2.8027 14.41 2.08162 12.715C1.36054 11.005 1 9.37 1 7.81C1 6.79 1.18027 5.815 1.54081 4.915C1.90135 4 2.47221 3.16 3.2684 2.41C4.22984 1.465 5.28142 1 6.39309 1C6.81372 1 7.23435 1.09 7.60992 1.27C8.0005 1.45 8.34602 1.72 8.61643 2.11L12.1017 7.015C12.3721 7.39 12.5674 7.735 12.7026 8.065C12.8378 8.38 12.9129 8.695 12.9129 8.98C12.9129 9.34 12.8077 9.7 12.5974 10.045C12.4021 10.39 12.1167 10.75 11.7561 11.11L10.6144 12.295C10.4492 12.46 10.3741 12.655 10.3741 12.895C10.3741 13.015 10.3891 13.12 10.4191 13.24C10.4642 13.36 10.5093 13.45 10.5393 13.54C10.8097 14.035 11.2754 14.68 11.9364 15.46C12.6124 16.24 13.3335 17.035 14.1147 17.83C14.9259 18.625 15.7071 19.36 16.5033 20.035C17.2844 20.695 17.9304 21.145 18.4412 21.415C18.5163 21.445 18.6064 21.49 18.7116 21.535C18.8317 21.58 18.9519 21.595 19.0871 21.595C19.3425 21.595 19.5378 21.505 19.7031 21.34L20.8448 20.215C21.2203 19.84 21.5809 19.555 21.9264 19.375C22.2719 19.165 22.6174 19.06 22.993 19.06C23.2784 19.06 23.5789 19.12 23.9094 19.255C24.2399 19.39 24.5854 19.585 24.9609 19.84L29.9334 23.365C30.324 23.635 30.5944 23.95 30.7596 24.325C30.9099 24.7 31 25.075 31 25.495Z"
                                    stroke="#398378"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                />
                            </svg>

                            <p className="ml-2 text-2xl font-poppins font-medium text-addblack">Call us</p>
                        </div>

                        <div className="space-y-1">
                            <p className="font-inter text-addgray">+421 (0) 908 857 752</p>
                            <p className="font-inter text-addgray">+421 (0) 903 175 395</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-x-3">
                            <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5001 0C5.60664 0 0 5.65469 0 12.6074C0 15.3351 1.63386 18.8546 2.69398 20.8402L11.7457 34.5512C11.8975 34.8278 12.1862 35 12.4998 35C12.8134 35 13.1023 34.8281 13.2541 34.5515L22.306 20.8405C23.3661 18.8549 25 15.3357 25 12.6077C25 5.65507 19.3936 0 12.5001 0ZM12.5001 1.73879C18.4617 1.73879 23.276 6.59442 23.276 12.6072C23.276 14.5523 21.7811 18.1692 20.7976 20.0114L12.5001 32.3094L4.20269 20.0114C3.21923 18.1692 1.7243 14.5523 1.7243 12.6072C1.7243 6.59442 6.53845 1.73879 12.5001 1.73879ZM12.5001 6.08617C8.93956 6.08617 6.03452 9.01615 6.03452 12.6072C6.03452 16.1983 8.93956 19.1283 12.5001 19.1283C16.0606 19.1283 18.9657 16.1983 18.9657 12.6072C18.9657 9.01615 16.0606 6.08617 12.5001 6.08617ZM12.5001 7.82497C15.1288 7.82497 17.2417 9.95557 17.2417 12.6072C17.2417 15.2585 15.1292 17.3895 12.5001 17.3895C9.87137 17.3895 7.75852 15.2589 7.75852 12.6072C7.75852 9.95596 9.87099 7.82497 12.5001 7.82497Z"
                                    fill="#398378"
                                />
                            </svg>

                            <p className="ml-2 text-2xl font-poppins font-medium text-addblack">Location</p>
                        </div>

                        <div className="space-y-1">
                            <p className="font-inter text-addgray w-full lg:w-[231px]">Seberíniho 1, 821 03 Bratislava Slovensko</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-x-3 items-center">
                            <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M29.2621 0H3.73791C2.74689 0.000929927 1.79668 0.389616 1.09595 1.08025C0.395285 1.77088 0.000905648 2.70753 0 3.68436V19.3156C0.000943383 20.2925 0.395279 21.2291 1.09595 21.9197C1.79662 22.6104 2.74689 22.9991 3.73791 23H29.2621C30.2531 22.9991 31.2033 22.6104 31.904 21.9197C32.6047 21.2291 32.9991 20.2925 33 19.3156V3.68436C32.9991 2.70753 32.6047 1.77094 31.904 1.08025C31.2034 0.389622 30.2531 0.000892672 29.2621 0ZM28.6562 2.03291L16.5 10.2669L4.3607 2.03291H28.6562ZM30.9378 19.3156H30.9375C30.9371 19.7536 30.7604 20.1732 30.4463 20.4828C30.1321 20.7925 29.7064 20.9666 29.2621 20.9671H3.73794C3.2936 20.9666 2.86791 20.7925 2.55377 20.4828C2.23962 20.1732 2.06298 19.7536 2.0625 19.3156V3.68436C2.06227 3.46072 2.10826 3.23918 2.19812 3.03366L15.9157 12.3377C16.0876 12.4541 16.2914 12.5167 16.5001 12.5167C16.7088 12.5167 16.9126 12.4541 17.0845 12.3377L30.8063 3.04318C30.8933 3.24612 30.9381 3.46418 30.9377 3.68453L30.9378 19.3156Z"
                                    fill="#398378"
                                />
                            </svg>

                            <p className="ml-2 text-2xl font-poppins font-medium text-addblack">Email</p>
                        </div>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <p className="font-inter text-primary">General</p>
                                <p className="font-inter text-addgray">Zer01@gmail.com</p>
                            </div>

                            <div className="space-y-1">
                                <p className="font-inter text-primary">Business</p>
                                <p className="font-inter text-addgray">sales@Zer01.pk</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-[0px_0px_24px_rgba(0,0,0,0.08)] px-4 lg:px-14  py-6 lg:py-16">
                    <h1 className="text-3xl font-poppins text-black font-semibold">Contact Now</h1>

                    <p className="font-inter text-addgray w-full lg:w-[350px] mt-10">
                        Fill up the foam and our team will get back to you within 24 hours.
                    </p>

                    <div className="mt-10 w-full">
                        <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full border-b border-[#E0E0E0]  py-1 font-inter outline-none focus:border-primary"
                                required
                                value={watch("name")}
                                {...register("name", { required: true })}
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full border-b border-[#E0E0E0]  py-1 font-inter outline-none focus:border-primary"
                                required
                                value={watch("email")}
                                {...register("email", { required: true })}
                            />
                            <input
                                type="tel"
                                placeholder="Phone *"
                                className="w-full border-b border-[#E0E0E0]  py-1 font-inter outline-none focus:border-primary"
                                required
                                value={watch("phone")}
                                {...register("phone", { required: true })}
                            />

                            <input
                                type="text"
                                placeholder="Message"
                                className="w-full border-b border-[#E0E0E0]  py-1 font-inter outline-none focus:border-primary"
                                required
                                maxLength={200}
                                value={watch("message")}
                                {...register("message", {
                                    required: true,
                                    maxLength: 200,
                                })}
                            />
                            <ImageUploading
                                acceptType={acceptType}
                                multiple={false}
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                    <div className="w-full flex justify-center">
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

                                                <p className="text-sm font-inter text-addgray">PNG, GIF, JPG, Max size: 5MB</p>
                                            </button>
                                        )}
                                    </div>
                                )}
                            </ImageUploading>

                            <div className="flex justify-center">
                                <input
                                    type="submit"
                                    value="Submit Form"
                                    className="text-white font-inter font-semibold bg-primary py-3 px-8 hover:bg-opacity-70 active:bg-opacity-80 cursor-pointer"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
