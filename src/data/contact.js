import { Mail, Phone, MapPin } from "lucide-react";

export const contactChannels = [
    {
        icon: Mail,
        title: "Email Address",
        value: "diponkorroy064@gmail.com",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=diponkorroy064@gmail.com",
        isExternal: true,
    },
    {
        icon: Phone,
        title: "Phone / WhatsApp",
        value: "+880 1744533593",
        link: "https://wa.me/8801744533593",
        isExternal: true,
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Dhaka-1207, Bangladesh",
        link: null,
        isExternal: false,
    },
];

export default contactChannels;
