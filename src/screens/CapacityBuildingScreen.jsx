import React from 'react';
import CapacityBuilding from '../MainComponents/CapacityBuilding/CapacityBuilding';
import CapacityBuildingStats from '../MainComponents/CapacityBuilding/CapacityBuildingStats';
import TeacherTrainingWorkshop from '../MainComponents/CapacityBuilding/TeacherTrainingWorkshop';
import CurriculumDevelopment from '../MainComponents/CapacityBuilding/CurriculumDevelopment';
import BookDevelopment from '../MainComponents/CapacityBuilding/BookDevelopment';
import ProfessionalsTraining from '../MainComponents/CapacityBuilding/ProfessionalsTraining';

const sectionStyle = {
  margin: '79px 0',
};

const CapacityBuildingScreen = () => (
<>
    <CapacityBuilding />

  <div className="mainhomebg-bg">
    <CapacityBuildingStats />
    <TeacherTrainingWorkshop />
    <div style={sectionStyle}>
      <CurriculumDevelopment />
    </div>
    <div style={sectionStyle}>
      <BookDevelopment />
    </div>
    <div style={sectionStyle}>
      <ProfessionalsTraining />
    </div>
  </div></>
);

export default CapacityBuildingScreen;