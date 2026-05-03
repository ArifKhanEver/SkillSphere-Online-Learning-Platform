import AboutUs from "@/components/AboutUs";
import CourseSection from "@/components/CourseSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (<>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <CourseSection></CourseSection>
    <LearningTips></LearningTips>
    <TrendingCourses></TrendingCourses>
    <TopInstructors></TopInstructors>
    <FAQ></FAQ>
  </>
  );
}
