import React from "react";
import { BookOpen } from 'lucide-react';
import TimelineEducation from "./TimelineEducation";
import SkillItem from "./SkillItem";
import { usePortfolioDetails } from "../../context/portfolioContext";
import TimelineExperience from "./TimelineExperience";

const Resume = () => {
  const { userDetails } = usePortfolioDetails();
  const { user } = userDetails;
  if (!user || !user?.skills || !user?.timeline) return <div>Loading...</div>;
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineEducation
            title="University school of the arts"
            date="2007 — 2008"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineEducation
            title="New york academy of art"
            startDate="2006 — 2007"
            description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
          />
          <TimelineEducation
            title="High school of art and design"
            date="2002 — 2004"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {user?.timeline?.map(
            ({ company_name, summary, startDate, endDate, bulletPoints, jobTitle }) => (
              <TimelineExperience
                title={company_name}
                summary={summary}
                startDate={startDate}
                endDate={endDate}
                description={bulletPoints}
                jobTitle={jobTitle}
                key={company_name}
              />
            )
          )}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {user?.skills.map(({ name, percentage }) => (
            <SkillItem title={name} value={percentage} key={name} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
