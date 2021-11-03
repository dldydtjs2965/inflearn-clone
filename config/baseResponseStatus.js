
module.exports = {

    SUCCESS: function successSet (message) {
        return {"isSuccess": true, "code": 1000, "message":message}
    },
    // Common
    TOKEN_VERIFICATION_FAILURE : { "isSuccess": false, "code": 3000, "message":"JWT 토큰 검증 실패" },
    TOKEN_VERIFICATION_SUCCESS : { "isSuccess": true, "code": 1001, "message":"JWT 토큰 검증 성공" }, // ?

    //Request error
    USER_ID_EMPTY : { "isSuccess": false, "code": 2000, "message":"유저 아이디가 비어있습니다." },
    USER_PASSWORD_EMPTY : { "isSuccess": false, "code": 2001, "message":"비밀번호가 비어있습니다." },
    SIGNUP_USER_ID_LENGTH : { "isSuccess": false, "code": 2002, "message":"아이디는 50자리 미만으로 입력해주세요." },
    SIGNUP_USER_INFO_WRONG : { "isSuccess": false, "code": 2003, "message":"비밀번호 또는 아이디가 틀렸습니다." },
    SIGNUP_USER_ID_ERROR_TYPE : { "isSuccess": false, "code": 2004, "message": "잘못된 아이디 형식입니다." },
    SIGNUP_PASSWORD_LENGTH : { "isSuccess": false, "code": 2005, "message":"비밀번호는 6~20자리를 입력해주세요." },
    SIGNUP_NICKNAME_EMPTY : { "isSuccess": false, "code": 2006, "message":"닉네임을 입력 해주세요." },
    SIGNUP_NICKNAME_LENGTH : { "isSuccess": false,"code": 2007,"message":"닉네임은 최대 20자리를 입력해주세요." },

    SIGNIN_EMAIL_EMPTY : { "isSuccess": false, "code": 2008, "message":"이메일을 입력해주세요" },
    SIGNIN_EMAIL_LENGTH : { "isSuccess": false, "code": 2009, "message":"이메일은 30자리 미만으로 입력해주세요." },
    SIGNIN_EMAIL_ERROR_TYPE : { "isSuccess": false, "code": 2010, "message":"이메일을 형식을 정확하게 입력해주세요." },
    SIGNIN_PASSWORD_EMPTY : { "isSuccess": false, "code": 2011, "message": "비밀번호를 입력 해주세요." },

    USER_USERID_EMPTY : { "isSuccess": false, "code": 2012, "message": "userId를 입력해주세요." },
    USER_USERID_NOT_EXIST : { "isSuccess": false, "code": 2013, "message": "해당 회원이 존재하지 않습니다." },

    USER_USEREMAIL_EMPTY : { "isSuccess": false, "code": 2014, "message": "이메일을 입력해주세요." },
    USER_USEREMAIL_NOT_EXIST : { "isSuccess": false, "code": 2015, "message": "해당 이메일을 가진 회원이 존재하지 않습니다." },
    USER_ID_NOT_MATCH : { "isSuccess": false, "code": 2016, "message": "유저 아이디 값을 확인해주세요" },
    USER_NICKNAME_EMPTY : { "isSuccess": false, "code": 2017, "message": "변경할 닉네임 값을 입력해주세요" },

    USER_STATUS_EMPTY : { "isSuccess": false, "code": 2018, "message": "회원 상태값을 입력해주세요" },
    USER_NICK_NAME_EMPTY: {"isSuccess": false, "code": 2019, "message": "유저 닉네임이 비어있습니다"},
    USER_REDUNDANT_PHONE_NUMBER: {"isSuccess": false, "code": 2020, "message": "중복된 휴대폰 번호 입니다"},
    USER_PHONE_NUMBER_EMPTY: {"isSuccess": false, "code": 2021, "message": "휴대폰 번호가 비어있습니다"},

    // Response error
    SIGNUP_REDUNDANT_EMAIL : { "isSuccess": false, "code": 3001, "message":"중복된 이메일입니다." },
    SIGNUP_REDUNDANT_NICKNAME : { "isSuccess": false, "code": 3002, "message":"중복된 닉네임입니다." },

    SIGNIN_USER_INFO_WRONG : { "isSuccess": false, "code": 3003, "message": "아이디 또는 비밀번호가 잘못 되었습니다." },
    SIGNIN_PASSWORD_WRONG : { "isSuccess": false, "code": 3004, "message": "비밀번호가 잘못 되었습니다." },
    SIGNIN_INACTIVE_ACCOUNT : { "isSuccess": false, "code": 3005, "message": "비활성화 된 계정입니다. 고객센터에 문의해주세요." },
    SIGNIN_WITHDRAWAL_ACCOUNT : { "isSuccess": false, "code": 3006, "message": "탈퇴 된 계정입니다. 고객센터에 문의해주세요." },
    TOKEN_EXPIRED_FAIL:{ "isSuccess": false, "code": 3007, "message":"JWT 토큰 유효기간 만료"},
    TOKEN_EMPTY:{ "isSuccess": false, "code": 3007, "message":"JWT 토큰이 비어있습니다."},
    UPDATE_EMAIL_FAIL:{ "isSuccess": false, "code": 3008, "message":"이메일 업데이트에 실패했습니다."},
    UPDATE_NICK_NAME_FAIL:{ "isSuccess": false, "code": 3009, "message":"닉네임 업데이트에 실패했습니다."},
    SIGNUP_USER_FAIL: { "isSuccess": false, "code": 3010, "message":"회원가입에 실패했습니다."},
    INSERT_REFRESH_TOKEN_FAIL: { "isSuccess": false, "code": 3011, "message":"refresh 토큰 동기화에 실패했습니다."},
    UPDATE_PHONE_NUMBER_FAIL: { "isSuccess": false, "code": 3012, "message":"휴대폰 번호 저장이 실패했습니다."},

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
 
 
}
