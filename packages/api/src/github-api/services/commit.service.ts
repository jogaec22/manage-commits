import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance} from 'axios';
import { CommitDto } from '../dto/commit.dto';

@Injectable()
export class CommitService {

    private request: AxiosInstance;
    private urlApiGitHub: string = 'https://api.github.com/';

    constructor() {
        this.request = axios.create({
            baseURL: this.urlApiGitHub
        });
    }

    async findByOwnerAndRepo(owner: string, repo: string): Promise<CommitDto[]> {
        const response = await this.request.get(`${this.urlApiGitHub}repos/${owner}/${repo}/commits`);
        return this.toDto(response?.data || []);        
    }

    private toDto<T>(data: T[]): Array<CommitDto> {
        return data.map((val:any) => {
            const {sha, commit, html_url, committer} = val;
            const {author, message} = commit;
            const avatarUrl = committer.avatar_url;
            return {
                sha,
                author: {...author, avatarUrl},
                message,
                htmlUrl: html_url
            }
        });        
    }
}
