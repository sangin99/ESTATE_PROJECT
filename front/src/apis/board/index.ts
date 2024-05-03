import axios from "axios";
import { PostBoardRequestDto } from "./dto/request";
import { GET_BOARD_LIST_URL, GET_SEARCH_BOARD_LIST_URL, POST_BOARD_REQUEST_URL } from "src/constant";
import { bearerAuthorization, requestErrorHandler, requestHandler } from "..";
import ResponseDto from "../response.dto";
import { GetBoardListResponseDto, GetSearchBoardListResponseDto } from "./dto/response";

// function : Q&A 작성 API 함수
export const postBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string) => {
    const result = await axios.post(POST_BOARD_REQUEST_URL, requestBody, 
        bearerAuthorization(accessToken))
        .then(requestHandler<ResponseDto>)
        .catch(requestErrorHandler);
    return result;
};

// function: Q&A 전체 리스트 불러오기 API 함수 
export const getBoardListRequest = async (accessToken: string) => {
    const result = await axios.get(GET_BOARD_LIST_URL, bearerAuthorization(accessToken))
        .then(requestHandler<GetBoardListResponseDto>)
        .catch(requestErrorHandler);
    return result;
};

// function: Q&A 검색 리스트 불러오기 API 함수 
export const getSearchBoardListRequest = async (searchWord: string, accessToken: string) => {
    const result = await axios.get(GET_SEARCH_BOARD_LIST_URL(searchWord), bearerAuthorization(accessToken))
        .then(requestHandler<GetSearchBoardListResponseDto>)
        .catch(requestErrorHandler);
    return result;
};