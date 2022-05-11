import { AuthorDto } from "./author.dto";

export interface CommitDto {
    sha: string;
    author: AuthorDto;
    message: string;
    htmlUrl: string;
}