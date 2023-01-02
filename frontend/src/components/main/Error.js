import Banner from '../main/Banner';

export default function Error () {

    const  data = {
        title: "404 - Not found",
        content: "The page you are looking cannot be found.",
        destination: "/",
        label: "Back to Dashboard"
    }

    return (
        
        <Banner bannerProp={data}/>
    )
}