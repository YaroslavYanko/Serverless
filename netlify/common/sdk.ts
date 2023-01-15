import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

export type AdminGetMeOutput = {
  __typename?: 'AdminGetMeOutput';
  id: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String'];
};

export type AdminRegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String'];
};

export type CloudinariSignatureOutput = {
  __typename?: 'CloudinariSignatureOutput';
  apiKey: Scalars['String'];
  cloudName: Scalars['String'];
  publicId: Scalars['String'];
  signature: Scalars['String'];
  timestamp: Scalars['Int'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  /** An array relationship */
  goods_items: Array<Goods>;
  /** An aggregate relationship */
  goods_items_aggregate: Goods_Aggregate;
  id: Scalars['uuid'];
  slug: Scalars['String'];
  title: Scalars['String'];
};


/** columns and relationships of "categories" */
export type CategoriesGoods_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesGoods_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  goods_items?: InputMaybe<Goods_Bool_Exp>;
  goods_items_aggregate?: InputMaybe<Goods_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  goods_items?: InputMaybe<Goods_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  goods_items_aggregate?: InputMaybe<Goods_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "goods" */
export type Goods = {
  __typename?: 'goods';
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id: Scalars['uuid'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  price: Scalars['numeric'];
  shortName: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "goods" */
export type Goods_Aggregate = {
  __typename?: 'goods_aggregate';
  aggregate?: Maybe<Goods_Aggregate_Fields>;
  nodes: Array<Goods>;
};

export type Goods_Aggregate_Bool_Exp = {
  count?: InputMaybe<Goods_Aggregate_Bool_Exp_Count>;
};

export type Goods_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Goods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Goods_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "goods" */
export type Goods_Aggregate_Fields = {
  __typename?: 'goods_aggregate_fields';
  avg?: Maybe<Goods_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Goods_Max_Fields>;
  min?: Maybe<Goods_Min_Fields>;
  stddev?: Maybe<Goods_Stddev_Fields>;
  stddev_pop?: Maybe<Goods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Goods_Stddev_Samp_Fields>;
  sum?: Maybe<Goods_Sum_Fields>;
  var_pop?: Maybe<Goods_Var_Pop_Fields>;
  var_samp?: Maybe<Goods_Var_Samp_Fields>;
  variance?: Maybe<Goods_Variance_Fields>;
};


/** aggregate fields of "goods" */
export type Goods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Goods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "goods" */
export type Goods_Aggregate_Order_By = {
  avg?: InputMaybe<Goods_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goods_Max_Order_By>;
  min?: InputMaybe<Goods_Min_Order_By>;
  stddev?: InputMaybe<Goods_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Goods_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Goods_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Goods_Sum_Order_By>;
  var_pop?: InputMaybe<Goods_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Goods_Var_Samp_Order_By>;
  variance?: InputMaybe<Goods_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "goods" */
export type Goods_Arr_Rel_Insert_Input = {
  data: Array<Goods_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Goods_On_Conflict>;
};

/** aggregate avg on columns */
export type Goods_Avg_Fields = {
  __typename?: 'goods_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "goods" */
export type Goods_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "goods". All fields are combined with a logical 'AND'. */
export type Goods_Bool_Exp = {
  _and?: InputMaybe<Array<Goods_Bool_Exp>>;
  _not?: InputMaybe<Goods_Bool_Exp>;
  _or?: InputMaybe<Array<Goods_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  shortName?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "goods" */
export enum Goods_Constraint {
  /** unique or primary key constraint on columns "id" */
  GoodsPkey = 'goods_pkey'
}

/** input type for incrementing numeric columns in table "goods" */
export type Goods_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "goods" */
export type Goods_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Goods_Max_Fields = {
  __typename?: 'goods_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  shortName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "goods" */
export type Goods_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shortName?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Goods_Min_Fields = {
  __typename?: 'goods_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  shortName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "goods" */
export type Goods_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shortName?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "goods" */
export type Goods_Mutation_Response = {
  __typename?: 'goods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Goods>;
};

/** input type for inserting object relation for remote table "goods" */
export type Goods_Obj_Rel_Insert_Input = {
  data: Goods_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Goods_On_Conflict>;
};

/** on_conflict condition type for table "goods" */
export type Goods_On_Conflict = {
  constraint: Goods_Constraint;
  update_columns?: Array<Goods_Update_Column>;
  where?: InputMaybe<Goods_Bool_Exp>;
};

/** Ordering options when selecting data from "goods". */
export type Goods_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shortName?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: goods */
export type Goods_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "goods" */
export enum Goods_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "goods" */
export type Goods_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Goods_Stddev_Fields = {
  __typename?: 'goods_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "goods" */
export type Goods_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Goods_Stddev_Pop_Fields = {
  __typename?: 'goods_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "goods" */
export type Goods_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Goods_Stddev_Samp_Fields = {
  __typename?: 'goods_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "goods" */
export type Goods_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "goods" */
export type Goods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Goods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Goods_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  shortName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Goods_Sum_Fields = {
  __typename?: 'goods_sum_fields';
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "goods" */
export type Goods_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** update columns of table "goods" */
export enum Goods_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Title = 'title'
}

export type Goods_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Goods_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Goods_Set_Input>;
  where: Goods_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Goods_Var_Pop_Fields = {
  __typename?: 'goods_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "goods" */
export type Goods_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Goods_Var_Samp_Fields = {
  __typename?: 'goods_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "goods" */
export type Goods_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Goods_Variance_Fields = {
  __typename?: 'goods_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "goods" */
export type Goods_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin registration */
  adminRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "goods" */
  delete_goods?: Maybe<Goods_Mutation_Response>;
  /** delete single row from the table: "goods" */
  delete_goods_by_pk?: Maybe<Goods>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_products" */
  delete_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** delete single row from the table: "orders_products" */
  delete_orders_products_by_pk?: Maybe<Orders_Products>;
  /** delete data from the table: "settings" */
  delete_settings?: Maybe<Settings_Mutation_Response>;
  /** delete single row from the table: "settings" */
  delete_settings_by_pk?: Maybe<Settings>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "goods" */
  insert_goods?: Maybe<Goods_Mutation_Response>;
  /** insert a single row into the table: "goods" */
  insert_goods_one?: Maybe<Goods>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "orders_products" */
  insert_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** insert a single row into the table: "orders_products" */
  insert_orders_products_one?: Maybe<Orders_Products>;
  /** insert data into the table: "settings" */
  insert_settings?: Maybe<Settings_Mutation_Response>;
  /** insert a single row into the table: "settings" */
  insert_settings_one?: Maybe<Settings>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "goods" */
  update_goods?: Maybe<Goods_Mutation_Response>;
  /** update single row of the table: "goods" */
  update_goods_by_pk?: Maybe<Goods>;
  /** update multiples rows of table: "goods" */
  update_goods_many?: Maybe<Array<Maybe<Goods_Mutation_Response>>>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update multiples rows of table: "order_status" */
  update_order_status_many?: Maybe<Array<Maybe<Order_Status_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "orders_products" */
  update_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** update single row of the table: "orders_products" */
  update_orders_products_by_pk?: Maybe<Orders_Products>;
  /** update multiples rows of table: "orders_products" */
  update_orders_products_many?: Maybe<Array<Maybe<Orders_Products_Mutation_Response>>>;
  /** update data of the table: "settings" */
  update_settings?: Maybe<Settings_Mutation_Response>;
  /** update single row of the table: "settings" */
  update_settings_by_pk?: Maybe<Settings>;
  /** update multiples rows of table: "settings" */
  update_settings_many?: Maybe<Array<Maybe<Settings_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GoodsArgs = {
  where: Goods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goods_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Orders_ProductsArgs = {
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SettingsArgs = {
  where: Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Settings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GoodsArgs = {
  objects: Array<Goods_Insert_Input>;
  on_conflict?: InputMaybe<Goods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goods_OneArgs = {
  object: Goods_Insert_Input;
  on_conflict?: InputMaybe<Goods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_ProductsArgs = {
  objects: Array<Orders_Products_Insert_Input>;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_Products_OneArgs = {
  object: Orders_Products_Insert_Input;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SettingsArgs = {
  objects: Array<Settings_Insert_Input>;
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Settings_OneArgs = {
  object: Settings_Insert_Input;
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GoodsArgs = {
  _inc?: InputMaybe<Goods_Inc_Input>;
  _set?: InputMaybe<Goods_Set_Input>;
  where: Goods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goods_By_PkArgs = {
  _inc?: InputMaybe<Goods_Inc_Input>;
  _set?: InputMaybe<Goods_Set_Input>;
  pk_columns: Goods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goods_ManyArgs = {
  updates: Array<Goods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_ManyArgs = {
  updates: Array<Order_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ProductsArgs = {
  _set?: InputMaybe<Orders_Products_Set_Input>;
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Products_By_PkArgs = {
  _set?: InputMaybe<Orders_Products_Set_Input>;
  pk_columns: Orders_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Products_ManyArgs = {
  updates: Array<Orders_Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SettingsArgs = {
  _set?: InputMaybe<Settings_Set_Input>;
  where: Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Settings_By_PkArgs = {
  _set?: InputMaybe<Settings_Set_Input>;
  pk_columns: Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Settings_ManyArgs = {
  updates: Array<Settings_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  id: Scalars['String'];
  label: Scalars['String'];
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderStatusPkey = 'order_status_pkey'
}

export enum Order_Status_Enum {
  /** Скасований */
  Canceled = 'CANCELED',
  /** Виданий клієнту */
  Delivered = 'DELIVERED',
  /** Відправлений */
  Done = 'DONE',
  /** Готується */
  InProgress = 'IN_PROGRESS',
  /** Новий */
  New = 'NEW'
}

/** Boolean expression to compare columns of type "order_status_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Status_Enum>;
  _in?: InputMaybe<Array<Order_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Order_Status_Enum>;
  _nin?: InputMaybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status>;
};

/** on_conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns?: Array<Order_Status_Update_Column>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status". */
export type Order_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_status */
export type Order_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "order_status" */
export type Order_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Status_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

export type Order_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  client_adress: Scalars['String'];
  client_name: Scalars['String'];
  client_phone: Scalars['String'];
  client_surname?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  /** An array relationship */
  order_items: Array<Orders_Products>;
  /** An aggregate relationship */
  order_items_aggregate: Orders_Products_Aggregate;
  status: Order_Status_Enum;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  client_adress?: InputMaybe<String_Comparison_Exp>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  client_phone?: InputMaybe<String_Comparison_Exp>;
  client_surname?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_items?: InputMaybe<Orders_Products_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Orders_Products_Aggregate_Bool_Exp>;
  status?: InputMaybe<Order_Status_Enum_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  client_adress?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  client_phone?: InputMaybe<Scalars['String']>;
  client_surname?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_items?: InputMaybe<Orders_Products_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  client_adress?: Maybe<Scalars['String']>;
  client_name?: Maybe<Scalars['String']>;
  client_phone?: Maybe<Scalars['String']>;
  client_surname?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  client_adress?: Maybe<Scalars['String']>;
  client_name?: Maybe<Scalars['String']>;
  client_phone?: Maybe<Scalars['String']>;
  client_surname?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  client_adress?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  client_surname?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Orders_Products_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "orders_products" */
export type Orders_Products = {
  __typename?: 'orders_products';
  id: Scalars['uuid'];
  /** An object relationship */
  item?: Maybe<Goods>;
  order_id: Scalars['uuid'];
  products_id: Scalars['uuid'];
};

/** aggregated selection of "orders_products" */
export type Orders_Products_Aggregate = {
  __typename?: 'orders_products_aggregate';
  aggregate?: Maybe<Orders_Products_Aggregate_Fields>;
  nodes: Array<Orders_Products>;
};

export type Orders_Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Products_Aggregate_Bool_Exp_Count>;
};

export type Orders_Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_Fields = {
  __typename?: 'orders_products_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Products_Max_Fields>;
  min?: Maybe<Orders_Products_Min_Fields>;
};


/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders_products" */
export type Orders_Products_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Products_Max_Order_By>;
  min?: InputMaybe<Orders_Products_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders_products" */
export type Orders_Products_Arr_Rel_Insert_Input = {
  data: Array<Orders_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders_products". All fields are combined with a logical 'AND'. */
export type Orders_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  _not?: InputMaybe<Orders_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Goods_Bool_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
  products_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_products" */
export enum Orders_Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersProductsPkey = 'orders_products_pkey'
}

/** input type for inserting data into table "orders_products" */
export type Orders_Products_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  item?: InputMaybe<Goods_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['uuid']>;
  products_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Orders_Products_Max_Fields = {
  __typename?: 'orders_products_max_fields';
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  products_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "orders_products" */
export type Orders_Products_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Products_Min_Fields = {
  __typename?: 'orders_products_min_fields';
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  products_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "orders_products" */
export type Orders_Products_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders_products" */
export type Orders_Products_Mutation_Response = {
  __typename?: 'orders_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders_Products>;
};

/** on_conflict condition type for table "orders_products" */
export type Orders_Products_On_Conflict = {
  constraint: Orders_Products_Constraint;
  update_columns?: Array<Orders_Products_Update_Column>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "orders_products". */
export type Orders_Products_Order_By = {
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Goods_Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders_products */
export type Orders_Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders_products" */
export enum Orders_Products_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductsId = 'products_id'
}

/** input type for updating data in table "orders_products" */
export type Orders_Products_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order_id?: InputMaybe<Scalars['uuid']>;
  products_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "orders_products" */
export type Orders_Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Products_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  order_id?: InputMaybe<Scalars['uuid']>;
  products_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "orders_products" */
export enum Orders_Products_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductsId = 'products_id'
}

export type Orders_Products_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Products_Set_Input>;
  where: Orders_Products_Bool_Exp;
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  ClientAdress = 'client_adress',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  ClientSurname = 'client_surname',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  client_adress?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  client_phone?: InputMaybe<Scalars['String']>;
  client_surname?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  client_adress?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  client_phone?: InputMaybe<Scalars['String']>;
  client_surname?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  ClientAdress = 'client_adress',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  ClientSurname = 'client_surname',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

export type Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  adminGetMe?: Maybe<AdminGetMeOutput>;
  /** Login admin */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  cloudinariSignature?: Maybe<CloudinariSignatureOutput>;
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch aggregated fields from the table: "goods" */
  goods_aggregate: Goods_Aggregate;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_products" */
  orders_products: Array<Orders_Products>;
  /** fetch aggregated fields from the table: "orders_products" */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: Settings_Aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGoodsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Query_RootGoods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Query_RootGoods_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Query_RootSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Query_RootSettings_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "settings" */
export type Settings = {
  __typename?: 'settings';
  id: Scalars['uuid'];
  masks_category?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "settings" */
export type Settings_Aggregate = {
  __typename?: 'settings_aggregate';
  aggregate?: Maybe<Settings_Aggregate_Fields>;
  nodes: Array<Settings>;
};

/** aggregate fields of "settings" */
export type Settings_Aggregate_Fields = {
  __typename?: 'settings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Settings_Max_Fields>;
  min?: Maybe<Settings_Min_Fields>;
};


/** aggregate fields of "settings" */
export type Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "settings". All fields are combined with a logical 'AND'. */
export type Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Settings_Bool_Exp>>;
  _not?: InputMaybe<Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Settings_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  masks_category?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "settings" */
export enum Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  SettingsPkey = 'settings_pkey'
}

/** input type for inserting data into table "settings" */
export type Settings_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  masks_category?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Settings_Max_Fields = {
  __typename?: 'settings_max_fields';
  id?: Maybe<Scalars['uuid']>;
  masks_category?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Settings_Min_Fields = {
  __typename?: 'settings_min_fields';
  id?: Maybe<Scalars['uuid']>;
  masks_category?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "settings" */
export type Settings_Mutation_Response = {
  __typename?: 'settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Settings>;
};

/** on_conflict condition type for table "settings" */
export type Settings_On_Conflict = {
  constraint: Settings_Constraint;
  update_columns?: Array<Settings_Update_Column>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "settings". */
export type Settings_Order_By = {
  id?: InputMaybe<Order_By>;
  masks_category?: InputMaybe<Order_By>;
};

/** primary key columns input for table: settings */
export type Settings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "settings" */
export enum Settings_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MasksCategory = 'masks_category'
}

/** input type for updating data in table "settings" */
export type Settings_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  masks_category?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "settings" */
export type Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Settings_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  masks_category?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "settings" */
export enum Settings_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MasksCategory = 'masks_category'
}

export type Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Settings_Set_Input>;
  where: Settings_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "goods" */
  goods: Array<Goods>;
  /** fetch aggregated fields from the table: "goods" */
  goods_aggregate: Goods_Aggregate;
  /** fetch data from the table: "goods" using primary key columns */
  goods_by_pk?: Maybe<Goods>;
  /** fetch data from the table in a streaming manner: "goods" */
  goods_stream: Array<Goods>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table in a streaming manner: "order_status" */
  order_status_stream: Array<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_products" */
  orders_products: Array<Orders_Products>;
  /** fetch aggregated fields from the table: "orders_products" */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** fetch data from the table in a streaming manner: "orders_products" */
  orders_products_stream: Array<Orders_Products>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: Settings_Aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
  /** fetch data from the table in a streaming manner: "settings" */
  settings_stream: Array<Settings>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootGoodsArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Subscription_RootGoods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Goods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Goods_Order_By>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Subscription_RootGoods_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGoods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Goods_Stream_Cursor_Input>>;
  where?: InputMaybe<Goods_Bool_Exp>;
};


export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOrder_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrders_Products_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Orders_Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Subscription_RootSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Subscription_RootSettings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSettings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAdminByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetAdminByUsernameQuery = { __typename?: 'query_root', admin: Array<{ __typename?: 'admin', id: any, password: string }> };

export type GetAdminByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetAdminByIdQuery = { __typename?: 'query_root', admin_by_pk?: { __typename?: 'admin', id: any, username: string } | null };

export type InsertAdminMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type InsertAdminMutation = { __typename?: 'mutation_root', insert_admin_one?: { __typename?: 'admin', id: any } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any }> };

export type GetGoodsItemsGroupByCategoryIdQueryVariables = Exact<{
  firstCategory: Scalars['uuid'];
  secondsCategory: Scalars['uuid'];
}>;


export type GetGoodsItemsGroupByCategoryIdQuery = { __typename?: 'query_root', firstGroup: Array<{ __typename?: 'goods', id: any }>, secondGroup: Array<{ __typename?: 'goods', id: any }> };

export type CreateFakeOrderMutationVariables = Exact<{
  client_adress: Scalars['String'];
  client_name: Scalars['String'];
  client_phone: Scalars['String'];
  client_surname: Scalars['String'];
  created_at?: InputMaybe<Scalars['timestamptz']>;
}>;


export type CreateFakeOrderMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', id: any } | null };

export type AddItemsToFakeOrderMutationVariables = Exact<{
  objects: Array<Orders_Products_Insert_Input> | Orders_Products_Insert_Input;
}>;


export type AddItemsToFakeOrderMutation = { __typename?: 'mutation_root', insert_orders_products?: { __typename?: 'orders_products_mutation_response', affected_rows: number } | null };


export const GetAdminByUsernameDocument = gql`
    query GetAdminByUsername($username: String!) {
  admin(where: {username: {_eq: $username}}) {
    id
    password
  }
}
    `;
export const GetAdminByIdDocument = gql`
    query GetAdminById($id: uuid!) {
  admin_by_pk(id: $id) {
    id
    username
  }
}
    `;
export const InsertAdminDocument = gql`
    mutation InsertAdmin($password: String!, $username: String!) {
  insert_admin_one(object: {password: $password, username: $username}) {
    id
  }
}
    `;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    id
  }
}
    `;
export const GetGoodsItemsGroupByCategoryIdDocument = gql`
    query GetGoodsItemsGroupByCategoryId($firstCategory: uuid!, $secondsCategory: uuid!) {
  firstGroup: goods(where: {category_id: {_eq: $firstCategory}}) {
    id
  }
  secondGroup: goods(where: {category_id: {_eq: $secondsCategory}}) {
    id
  }
}
    `;
export const CreateFakeOrderDocument = gql`
    mutation CreateFakeOrder($client_adress: String!, $client_name: String!, $client_phone: String!, $client_surname: String!, $created_at: timestamptz) {
  insert_orders_one(
    object: {client_adress: $client_adress, client_name: $client_name, client_phone: $client_phone, client_surname: $client_surname, status: NEW, created_at: $created_at}
  ) {
    id
  }
}
    `;
export const AddItemsToFakeOrderDocument = gql`
    mutation AddItemsToFakeOrder($objects: [orders_products_insert_input!]!) {
  insert_orders_products(objects: $objects) {
    affected_rows
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAdminByUsername(variables: GetAdminByUsernameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAdminByUsernameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByUsernameQuery>(GetAdminByUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminByUsername', 'query');
    },
    GetAdminById(variables: GetAdminByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAdminByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByIdQuery>(GetAdminByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminById', 'query');
    },
    InsertAdmin(variables: InsertAdminMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertAdminMutation>(InsertAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertAdmin', 'mutation');
    },
    GetCategories(variables?: GetCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCategories', 'query');
    },
    GetGoodsItemsGroupByCategoryId(variables: GetGoodsItemsGroupByCategoryIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGoodsItemsGroupByCategoryIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGoodsItemsGroupByCategoryIdQuery>(GetGoodsItemsGroupByCategoryIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGoodsItemsGroupByCategoryId', 'query');
    },
    CreateFakeOrder(variables: CreateFakeOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateFakeOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateFakeOrderMutation>(CreateFakeOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateFakeOrder', 'mutation');
    },
    AddItemsToFakeOrder(variables: AddItemsToFakeOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddItemsToFakeOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddItemsToFakeOrderMutation>(AddItemsToFakeOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddItemsToFakeOrder', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;