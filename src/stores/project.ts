import { defineStore } from 'pinia'
import type { ProjectInterface } from '@/interfaces/project.interface'
import type { CommonResponseInterface } from '@/interfaces/common.interface'
import type { ProjectRequestInterface } from '@/interfaces/project.interface'
import { useToast } from 'vue-toastification'
import type { UnwrapRefSimple } from '@vue/reactivity'
import router from '@/router'

export const useProjectStore = defineStore('project', {state: () => ({
    projects: [] as ProjectInterface[],
    loading: false,
    error: null as null | string,
    }),

    actions: {
        async getProjects(){
            this.loading = true
            this.error = null

        try {
            const response = await fetch ('http://localhost:8080/api/proyek/viewall')

            const data: CommonResponseInterface<ProjectInterface[]> = 
                await response.json()
            this.projects = data.data
        } catch (err){
            this.error = `Gagal mengambil proyek ${err} `
        } finally {
            this.loading = false
        }
    },

    async addProject(body: ProjectRequestInterface) {
      this.loading = true;
      this.error = null;
    
      try {
        const response = await fetch('http://localhost:8080/api/proyek/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
    
        if (!response.ok) {
          const errorResponse = await response.json().catch(() => null);
          const errorMessage = errorResponse?.message || `HTTP Error: ${response.status}`;
          throw new Error(errorMessage);
        }
    
        const data: CommonResponseInterface<ProjectInterface> = await response.json();
        this.projects.push(data.data);
        useToast().success("Sukses menambahkan proyek");
        await router.push("/proyek");
      } catch (err) {
        this.error = `Gagal menambahkan proyek: ${(err as Error).message}`;
        useToast().error(this.error);
      } finally {
        this.loading = false;
      }
    },    

      async updateProject(id: string, body: ProjectRequestInterface) {
        this.loading = true;
        this.error = null;
      
        try {
          const response = await fetch('http://localhost:8080/api/proyek/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, ...body }),
          });

          if (!response.ok) {
            const errorResponse = await response.json().catch(() => null);
            const errorMessage = errorResponse?.message || `HTTP Error: ${response.status}`;
            throw new Error(errorMessage);
          }

          const data: CommonResponseInterface<ProjectInterface> = await response.json();
          this.projects.push(data.data);
          useToast().success("Sukses mengubah proyek");
          await router.push("/proyek");
        } catch (err) {
          this.error = `Gagal mengubah proyek ${err as Error}.message`;
          useToast().error(this.error);
        } finally {
          this.loading = false;
        }
      },

      async getProjectDetail(id: string): Promise<ProjectInterface | undefined> {
        this.loading = true;
        this.error = null;
      
        try {
          const response: Response = await fetch(`http://localhost:8080/api/proyek/${id}`);
          const data: CommonResponseInterface<ProjectInterface> = await response.json();
          return data.data;
        } catch (err) {
          this.error = `Gagal mengambil proyek ${err}`;
        } finally {
          this.loading = false;
        }
      },

      async deleteProject(id: string): Promise<void> {
        this.loading = true;
        this.error = null;
    
        try {
            const response: Response = await fetch(
                `http://localhost:8080/api/proyek/${id}/delete`,
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                },
            );
    
            if (response.ok) {
                this.projects = this.projects.filter(
                    (project: UnwrapRefSimple<ProjectInterface>): boolean => project.id !== id
                );
                useToast().success("Sukses menghapus proyek");
                
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                throw new Error('Gagal menghapus proyek');
            }
        } catch (err) {
            this.error = `Gagal menghapus proyek ${(err as Error).message}`;
            useToast().error(this.error);
        } finally {
            this.loading = false;
        }
    }    
      
      
    },

    
    
})