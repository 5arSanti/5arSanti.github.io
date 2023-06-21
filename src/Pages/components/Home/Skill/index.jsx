import "./styles.css";

const Skill = (data) => {

    const renderExperienceView = () => {
        if(data.data?.experience === 1){
            return (
                <p>{data.data?.experience} año de experiencia</p>
            );
        }
        else{
            return (
                <p>{data.data?.experience} años de experiencia</p>
            );
        }
    }

    return (
        <div className="skill-container">
            <div className="skill-logo">
                <img src={data.data?.image} alt="Logo" />
            </div>
            <div className="skill-info">
                <p>{data.data?.name}</p>
                {renderExperienceView()}
            </div>
        </div>
    );
}
export { Skill };