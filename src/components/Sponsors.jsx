const sponsorsInfoGold = [
    {
        image: "sponsors/rcigdtuw.jpg",
        link: "",
    }


];

const sponsorsInfoSilver = [
    {
        image: "sponsors/codecrafters.jpg",
        link: "",
    },
    {
        image: "sponsors/geekroom.jpg",
        link: "",
    }



];

const sponsorsInfoBronze = [
    {
        image: "sponsors/interview_buddy.png",
        link: "",
    },
    {
        image: "sponsors/sprint.jpg",
        link: "",
    },

];

const sponsorsCertificate = [
    {
        image: "sponsors/certificate_partner.jpg",
        link: "",
    }

];
const SponsorsCard = ({ link,image }) => {
    return (
        <div className="m-5 cursor-pointer max-w-sm rounded-md  overflow-hidden  hover:shadow-xl  transition duration-300" style={{  boxShadow: "0 4px 6px hsl(210, 50%, 50%)" }}>
            <div className="p-3">
                <a href={link}><img src={image} alt="sponsors" className="w-2/4 mx-auto" /></a>
                {/* <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{prize}</p> */}
            </div>
        </div>
    );
};

const Sponsors = () => {
    return (
        <>
        <h1 id="sponsors" className="Rocher-heading" style={{color:'#2D2B46'}}>Sponsors</h1>
        <h2 className="mt-10 font-bold text-3xl" style={{color:'white'}}>Gold </h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfoGold.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 font-bold text-3xl" style={{color:'white'}}>Silver </h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfoSilver.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 font-bold text-3xl" style={{color:'white'}}>Bronze </h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsInfoBronze.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
        <h2 className="mt-10 font-bold text-3xl" style={{color:'white'}}>Certificate Partner </h2>
        <div className="flex flex-wrap justify-center">
            {sponsorsCertificate.map((link, index) => (
                <SponsorsCard key={index} {...link} />
            ))}
        </div>
 
        </>
    );
};

export default Sponsors;
