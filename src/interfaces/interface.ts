import React, { ErrorInfo, ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export interface HelmetProps {
  title: string;
  description: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface Query {
  limit?: number;
  page?: number;
  search?: string;
  filter?: string;
}

export interface Metadata {
  itemsPerPage?: number;
  totalItems?: number;
  totalPages?: number;
  currentPage?: number;
}

export interface ErrorResponse {
  message?: string;
  errorCode?: string;
}

export interface ApiResponse<T> {
  success?: boolean;
  errorCode?: string;
  statusCode?: number;
  message?: string;
  data?: T | null;
}

export interface ApiListResponse<T> {
  success?: boolean;
  errorCode?: string;
  statusCode?: number;
  message?: string;
  data?: {
    results: T | null;
    meta: Metadata;
  };
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  rePassword?: string;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}

export enum ERole {
  User = "user",
  Admin = "admin",
  Guest = "guest",
}
export interface IUser {
  id: number;
  email: string;
  username?: string;
  phone?: string;
  role: ERole;
  accessToken: string;
  avatar?: string;
}
