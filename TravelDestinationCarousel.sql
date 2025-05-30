PGDMP      6                }            TravelDestinationCarousel    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    66026    TravelDestinationCarousel    DATABASE     �   CREATE DATABASE "TravelDestinationCarousel" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
 +   DROP DATABASE "TravelDestinationCarousel";
                postgres    false            �            1259    66039    Destinations    TABLE     �  CREATE TABLE public."Destinations" (
    "Id" integer NOT NULL,
    "Name" character varying(100) NOT NULL,
    "ImageName" character varying(255) NOT NULL,
    "Description" character varying(255),
    "Location" character varying(100),
    "LinkUrl" character varying(255),
    "IsActive" boolean DEFAULT true,
    "DisplayOrder" integer,
    "CreatedDate" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    ishero boolean DEFAULT false
);
 "   DROP TABLE public."Destinations";
       public         heap    postgres    false            �            1259    66038    Destinations_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Destinations_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Destinations_Id_seq";
       public          postgres    false    216            �           0    0    Destinations_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Destinations_Id_seq" OWNED BY public."Destinations"."Id";
          public          postgres    false    215            P           2604    66042    Destinations Id    DEFAULT     x   ALTER TABLE ONLY public."Destinations" ALTER COLUMN "Id" SET DEFAULT nextval('public."Destinations_Id_seq"'::regclass);
 B   ALTER TABLE public."Destinations" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    66039    Destinations 
   TABLE DATA           �   COPY public."Destinations" ("Id", "Name", "ImageName", "Description", "Location", "LinkUrl", "IsActive", "DisplayOrder", "CreatedDate", ishero) FROM stdin;
    public          postgres    false    216   �       �           0    0    Destinations_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Destinations_Id_seq"', 8, true);
          public          postgres    false    215            U           2606    66048    Destinations Destinations_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Destinations"
    ADD CONSTRAINT "Destinations_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."Destinations" DROP CONSTRAINT "Destinations_pkey";
       public            postgres    false    216            �   �  x��Vko�6���
~��$��#)PY���6Eݬ_We2�H�����~���d�;�E��<�s�d�2�&/�^7�����{�e]ץ���,yoZ+]���
�=�>+��0|7�ɚ��e�+���u���eGvC��N$>n��I)nw��wC�����Y��5g�b^p�;�����/��zM�	+5wᏕ�[:e���3�H+}KJ��9�.�pi)��يSʮ>5�J��J��2�[��2N"��1G��%��'|�X'=�u)  ��Q�-�3��.�B���I��얫t��){���_;�t'[��6q��l�(���j�G��t<�'�y2=g�œ���t�^L��|T�LG�I�������v�o�.�5�	u�s��r�	pԉ��M�����0��tb����%Ɓ������+li��, [ �\ǭ�9T����1�����U=Н�%�*0P"Z���ǃ�xG۔}��cyHxڄ�\���me��ͺ���*|�a�Rv�IeԆ!B�r��ƭ�'��gn�KG�&;�|6���{^��y=��9,���H�B�ĵa�I&��|1���/��i2[�%��Ŭ��?vO'���[���J���5�h�y�cΆ�B2�A#!���Н��i��u�B�e�Tkcb�����P�M�J؅!`�XΩ��|Y��:�vX�qU!$�e�U � w�K�}����D�cj��v�'��8	��si�[2��>���\����r9O��Y>Y�|^�f_��α2��T*f/Ud%K��"5�r�e�.��p���������"���|�>�k,�%���T�
��p0���
 ё�P����4m�l�D�^B4��c�,vg�\���K#8������� s� �ɞ��q��Hf:&�F?� ���3�x���o����^��C��$>� 0q1�����y{m+�%Y���\�$2ȣ`ܯSic��[�;(%.��)�**B�|�+��"Ir��+/-�����]� ln����2��^�-����	
F6�ޥ	�XR֟4T�6���i~����R��D��AϏgjXhhD�F��Ěϔ����xI~B�දE�I�ѫ�}7o�VϮ�� �!����o���4��t*v��w5M���닕��+c��anԯg��%����,(:��u$�~��S�����i��-G�B�E�������c3l� �ġ����%&���O.1��7����ֹ&�"�ϔ��V�e���,�YJWD�����O�C,���9�]��14?��ߺ��iI�����_㒰���5��X�)]��|���E33`���6^\�����l�L'h2f�ٴ��X�\AM����P��j�B��0CS�U�XᎧL�N��eeP�C�;wH�;�h�;��W<�T ��-z���{�c^�(�.Ԫ�����i'7��p�e0o��`z~��ӓ��� �6�5     