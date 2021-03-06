package com.jayjay.ldst.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.List;

/**
 * <p>
 * 
 * </p>
 *
 * @author JayJay
 * @since 2020-11-02
 */
public class LdstCover implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId(type = IdType.UUID)
    private String id;

    /**
     * 标题
     */
    private String title;

    /**
     * 封面图片url
     */
    private String coverImgUrl;

    /**
     * 封面图片原始url
     */
    private String coverOriginImgUrl;

    /**
     * 原始详情链接
     */
    private String originUrl;

    /**
     * 图片数量
     */
    private Integer total;

    /**
     * 类型
     */
    private String type;

    /**
     * 是否最新
     */
    private Boolean newest;

    /**
     * 图片日期
     */
    private LocalDateTime date;

    /**
     * 爬取日期
     */
    private LocalDateTime createDate;

    @TableField(exist = false)
    private List<LdstImg> ldstImgList;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCoverImgUrl() {
        return coverImgUrl;
    }

    public void setCoverImgUrl(String coverImgUrl) {
        this.coverImgUrl = coverImgUrl;
    }

    public String getCoverOriginImgUrl() {
        return coverOriginImgUrl;
    }

    public void setCoverOriginImgUrl(String coverOriginImgUrl) {
        this.coverOriginImgUrl = coverOriginImgUrl;
    }

    public String getOriginUrl() {
        return originUrl;
    }

    public void setOriginUrl(String originUrl) {
        this.originUrl = originUrl;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean getNewest() {
        return newest;
    }

    public void setNewest(Boolean newest) {
        this.newest = newest;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public List<LdstImg> getLdstImgList() {
        return ldstImgList;
    }

    public void setLdstImgList(List<LdstImg> ldstImgList) {
        this.ldstImgList = ldstImgList;
    }

    @Override
    public String toString() {
        return "LdstCover{" +
        "id=" + id +
        ", title=" + title +
        ", coverImgUrl=" + coverImgUrl +
        ", coverOriginImgUrl=" + coverOriginImgUrl +
        ", originUrl=" + originUrl +
        ", total=" + total +
        ", type=" + type +
        ", new=" + newest +
        ", date=" + date +
        ", createDate=" + createDate +
        "}";
    }
}
