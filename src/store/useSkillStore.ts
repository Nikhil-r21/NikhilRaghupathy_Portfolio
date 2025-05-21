import { create } from 'zustand';
import { ISkill } from '../types';
import { skillsData } from '../data/skillsData';

interface SkillState {
  skills: ISkill[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filteredSkills: ISkill[];
}

export const useSkillStore = create<SkillState>((set, get) => ({
  skills: skillsData,
  activeFilter: 'All',
  filteredSkills: skillsData,
  setActiveFilter: (filter) => set((state) => {
    const filtered = filter === 'All' 
      ? state.skills 
      : state.skills.filter(skill => skill.category === filter);
    
    return { 
      activeFilter: filter,
      filteredSkills: filtered
    };
  }),
}));