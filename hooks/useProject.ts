import { type } from 'os';
import { useState, useEffect } from 'react';
import { ProjectInfo } from '../helpers/content';
import { ProjectContent } from '../helpers/types';

interface ProjectStore {
  projectId: string;
}

export const useProject = ({ projectId }: ProjectStore) => {
  const [project, setProject] = useState<ProjectContent>();

  useEffect(() => {
    const searchedProject = ProjectInfo.filter((project: ProjectContent) => {
      if (project.id === projectId) {
        return project;
      }
      return null;
    });

    setProject(searchedProject[0]);
  }, []);

  return {
    project,
  };
};
