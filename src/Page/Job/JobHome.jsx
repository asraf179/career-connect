import BannerJob from "./BannerJob";
import CategoryList from "./CategoryList";
import FeatureJobs from "./FeatureJobs";


const JobHome = () => {
        return (
                <div className="mx-w-6xl mx-auto">
                     <BannerJob></BannerJob>
                    <CategoryList></CategoryList>
                      <FeatureJobs></FeatureJobs>
                </div>
        );
};

export default JobHome;